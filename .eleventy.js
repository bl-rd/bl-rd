const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(eleventyConfig) {
  // enable syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // ISO string filter
  eleventyConfig.addFilter('isoString', dateObj => {
    const date = new Date(dateObj);
    return date.toISOString();
  });
};