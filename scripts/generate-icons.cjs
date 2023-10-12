const fs = require('node:fs');
const path = require('node:path');
const icongen = require('icon-gen');

const iconConfig = require('../icon.config.json');

const inputFile = path.join(__dirname, '../public/favicon.svg');
const outputFolder = path.join(__dirname, '../public/images');

/**
 * 生成 icon
 */
async function generateIcons() {
  await icongen(inputFile, outputFolder, {
    report: true,
    favicon: {
      name: 'favicon-',
      pngSizes: [
        ...new Set([...iconConfig.android.sizes, ...iconConfig.ios.sizes])
      ].sort((a, b) => a - b),
      icoSizes: iconConfig.favicon.sizes
    }
  });
  fs.renameSync(
    path.join(outputFolder, 'favicon.ico'),
    path.join(outputFolder, '../favicon.ico')
  );
}

// eslint-disable-next-line no-console
generateIcons().catch(console.error);
