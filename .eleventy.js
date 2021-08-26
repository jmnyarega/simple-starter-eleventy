const fs = require("fs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("filesize", function () {
    return "20MB";
  });

  eleventyConfig.addPassthroughCopy("src/css/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
