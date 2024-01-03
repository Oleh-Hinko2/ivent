module.exports = {
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "ua"],
    pages: {
      "*": ["common"], // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
    },
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
};
