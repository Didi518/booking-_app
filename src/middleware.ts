export { default } from "next-auth/middleware";

// export const config = {
//  matcher: ["/utilisateurs/:path*", "/api/:path*"],
// };

export const config = {
  matcher: ["/utilisateurs/:path*"],
};
