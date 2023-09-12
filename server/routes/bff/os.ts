import os from 'node:os';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

interface PkgJson {
  [key: string]: string | PkgJson;
}

export default defineEventHandler(() => {
  const pkgJson = JSON.parse(
    readFileSync(resolve(process.cwd(), 'package.json'), 'utf-8')
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
