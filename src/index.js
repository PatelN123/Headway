const path = require("path");

module.exports = function(context) {
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const { headway } = themeConfig || {};

  if (!headway) {
    throw new Error(
      `Nayan Patel - headway plugin: You need to specify 'headway' object in 'themeConfig'`
    );
  }

  const {
    selector,
    account,
  } = headway;

  if (!account) {
    throw new Error(
      "Nayan Patel - headway plugin: The headway account ID is missing"
    );
  }

  return {
    name: "docusaurus-plugin-headway",

    injectHtmlTags() {
      console.log("Nayan Patel - Plugin headway...");
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
            var HW_config = {
              selector: "${selector}", // CSS selector where to inject the badge
              account: "${account}" // your account ID, you can find it in Settings->Widget
            };
            `
          }
        ]
      };
    }
  };
};