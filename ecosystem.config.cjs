module.exports = {
  apps: [
    {
      name: 'nuxt3-template',
      cwd: './server',
      script: 'index.mjs',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        HOST: '0.0.0.0',
        PORT: '80'
      }
    }
  ]
};
