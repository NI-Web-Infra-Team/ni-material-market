const fs = require('node:fs');
const path = require('node:path');
const icongen = require('icon-gen');
const { program } = require('commander');

program
  .requiredOption('-i, --input  <string>', '输入的文件路径,支持 svg/png 格式。')
  .requiredOption('-o, --output  <string>', '导出的路径。')
  .requiredOption('-p, --prefix  <string>', '图片的前缀。');

program.parse();
const options = program.opts();
const iconConfig = require('../icon.config.json');

const inputFile = path.resolve(process.cwd(), options.input);
const outputFolder = path.resolve(process.cwd(), options.output);

/**
 * 生成图标
 */
async function generateIcons() {
  await icongen(inputFile, outputFolder, {
    report: true,
    favicon: {
      name: options.prefix,
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
