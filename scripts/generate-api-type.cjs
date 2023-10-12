const { resolve, join } = require('node:path');
const { writeFileSync } = require('node:fs');
const { generateApi } = require('swagger-typescript-api');
const prettier = require('prettier');
const { program } = require('commander');

program
  .option('-d, --definitions <string>', 'swagger 的 definitions')
  .option('-n, --name <string>', '文件的名称')
  .requiredOption('-u, --url  <string>', 'swagger 的 url')
  .requiredOption('-o, --output  <string>', '导出的路径');

program.parse();
const options = program.opts();

// 本地环境
const WEB_API_URL = options.url;
// swagger 右上角的 definition
const DEFINITIONS = (options.definitions ?? '')
  .split(',')
  .filter(Boolean)
  .map(item => item.trim());
const OUTPUT = resolve(process.cwd(), options.output);
const NAME = options.name;

if (DEFINITIONS.length === 0 && NAME === undefined) {
  throw new Error('请指定 definitions 或者 name');
}

const h = `
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## 此文件由程序自动生成，请勿修改！                             ##
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

`;

/**
 * 生成 api
 * @param name 名称
 */
async function handleGenerateApi(name) {
  let isUrl = false;
  try {
    isUrl = !!new URL(WEB_API_URL);
  } catch {
    isUrl = false;
  }
  const { files } = await generateApi({
    name: `${name ?? NAME}.d.ts`,
    output: OUTPUT,
    url: isUrl ? `${WEB_API_URL}${name ?? ''}` : undefined,
    input: isUrl ? undefined : resolve(process.cwd(), WEB_API_URL),
    generateClient: false
  });
  for (const { fileName, fileExtension, fileContent } of files) {
    writeFileSync(
      join(OUTPUT, `${fileName}${fileExtension}`),
      await prettier.format(h + fileContent, { parser: 'typescript' })
    );
  }
}

/**
 * @returns void
 */
async function main() {
  if (DEFINITIONS.length === 0) {
    return await handleGenerateApi();
  }
  for (const name of DEFINITIONS) {
    await handleGenerateApi(name);
  }
}

main();
