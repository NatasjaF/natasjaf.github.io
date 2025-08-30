module.exports = function(eleventyConfig) {
  // 🔽 add this block
  eleventyConfig.addNunjucksFilter("date", (value, format = "yyyy") => {
    const d = (!value || value === "now") ? new Date() : new Date(value);
    if (format === "yyyy") return String(d.getFullYear());
    return d.toISOString();
  });

  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy({ "src/cv.pdf": "cv.pdf" });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
