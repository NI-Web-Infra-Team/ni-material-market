import os from 'node:os';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

interface PkgJson {
  [key: string]: string | PkgJson;
}

export default defineEventHandler(() => {
  console.log('os', dirname(fileURLToPath(import.meta.url)));
  const pkgJson = JSON.parse(
    readFileSync(
      join(dirname(fileURLToPath(import.meta.url)), '../../', 'package.json'),
      'utf-8'
    )
  ) as PkgJson;
  return {
    cpus: [...new Set(os.cpus().map(cpu => cpu.model))].join(', '),
    hostname: os.hostname(),
    arch: os.arch(),
    platform: os.platform(),
    release: os.release(),
    totalmem: `${Math.round(os.totalmem() / 1024 / 1024 / 1024)} GB`,
    type: os.type(),
    version: pkgJson.version,
    serverTime: new Date().toLocaleString()
  };
});
