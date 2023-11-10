import { defineConfig } from 'taze';

export default defineConfig({
  // ignore packages from bumping
  exclude: [],
  // fetch latest package info from registry without cache
  force: true,
  // write to package.json
  write: true,
  // override with different bumping mode for each package
  packageMode: 'major'
});
