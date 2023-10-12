require('dotenv').config();

module.exports = {
  apps: [
    {
      name: 'nuxt-vuetify-admin',
      cwd: './server',
      script: 'index.mjs',
      instances: 2,
      exec_mode: 'cluster',
      env: {
        HOST: '0.0.0.0',
        PORT: '80',
        ...process.env
      }
    }
  ]
};
