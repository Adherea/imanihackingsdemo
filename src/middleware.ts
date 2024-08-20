// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ["en", "ja"],

//   // Used when no locale matches
//   defaultLocale: "en",
// });

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(ja|en)/:path*"],
// };

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Daftar semua lokal yang didukung
  locales: ["en", "ja"],

  // Lokal default yang digunakan ketika tidak ada yang cocok
  defaultLocale: "en",
});

export const config = {
  // Menangkap semua rute kecuali folder `api`, `_next`, dan file statis
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
