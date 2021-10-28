module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/sass/");

  return {
    dir: {
      input: "src",
      output: "site",
    },
    templateFormats: ["html", "md", "njk"],
  };
};
