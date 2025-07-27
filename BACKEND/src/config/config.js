export const cookieOptions = {
  httpOnly: true,
  secure: true,               // ⬅️ Required for SameSite=None
  sameSite: "None",           // ⬅️ Allow cookies across domains
  maxAge: 1000 * 60 * 60,     // 1 hour
};
