const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
  // enable syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // ISO string filter
  eleventyConfig.addFilter('isoString', dateObj => {
    const date = new Date(dateObj);
    return date.toISOString();
  });

  // Date format filter
  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("T, d MMMM yyyy");
  });

  return {
    templateFormats: ['njk', 'md', 'html', '11ty.js']
  };
};