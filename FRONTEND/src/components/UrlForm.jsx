import React, { useState } from "react";
import { createShortUrl } from "../api/shortUrl.api";
import { useSelector } from "react-redux";
import { QueryClient } from "@tanstack/react-query";
import { queryClient } from "../main";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState();
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const [customSlug, setCustomSlug] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleSubmit = async () => {
    try {
      const shortUrl = await createShortUrl(url, customSlug);
      setShortUrl(shortUrl);
      queryClient.invalidateQueries({ queryKey: ["userUrls"] });
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="">
        <div>
          <label
            htmlFor="url"
            className="block text-md -mt-4 font-medium text-gray-750 mb-3"
          >
            Enter your URL
          </label>
          <div className="relative">
            <input
              type="url"
              id="url"
              value={url}
              onInput={(event) => setUrl(event.target.value)}
              placeholder="https://your-long-url.com"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50 hover:bg-white"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
          </div>
        </div>

        {isAuthenticated && (
          <div>
            <label
              htmlFor="customSlug"
              className="block text-md font-medium text-gray-750 mt-2 mb-2"
            >
              Custom URL (optional)
            </label>
            <input
              type="text"
              id="customSlug"
              value={customSlug}
              onChange={(e) => setCustomSlug(e.target.value)}
              placeholder="custom-link"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-gray-50 hover:bg-white"
            />
          </div>
        )}
      </div>

      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
      >
        Shorten URL ✨
      </button>

      {error && (
        <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 text-red-700 rounded-xl animate-shake">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      )}

      {shortUrl && (
        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl animate-slide-down">
          <h3 className="text-lg font-semibold text-green-800 mb-3">
            ✅ URL Shortened Successfully!
          </h3>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={shortUrl}
              readOnly
              className="flex-1 px-4 py-2 bg-white border border-green-300 rounded-lg text-green-700 font-mono text-sm"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-green-100 hover:bg-green-200 text-green-700"
              }`}
            >
              {copied ? "✓ Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
