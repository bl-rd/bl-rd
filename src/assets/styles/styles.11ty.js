const postcss = require('postcss');
const postcssImport = require('postcss-import');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

module.exports = class {
  async data() {
    return {
      permalink: '/assets/styles/main2.css',
      eleventyExcludeFromCollections: true,
      entryPath: path.join(__dirname, '/main.css')
    }
  }

  async generateCss(entryPath) {
    const readFile = promisify(fs.readFile);
    try {
      const file = await readFile(entryPath, 'utf-8');
      const css = await postcss()
        .use(postcssImport({
          path: [ path.join(__dirname) ]
        }))
        .process(file);
      return css.css;
    } catch (e) {
      throw e;
    }
  }

  async render({ entryPath }) {
    try {
      return await this.generateCss(entryPath )
    }
    catch (e) {
      throw e;
    }
  }
}