import os from 'node:os';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { PackageD } from '~/types/__quicktype__/package.d';
import type { Os } from '~/types/example.d';

export default defineEventHandler(() => {
  const pkgJson = JSON.parse(
    readFileSync(
      join(
        dirname(fileURLToPath(import.meta.url)),
        process.env.NODE_ENV === 'development' ? '../../' : './',
        'package.json'
      ),
      'utf-8'
    )
  ) as PackageD;
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
  } as Os;
});
