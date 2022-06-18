const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'ship1place-app.test',
    port: 8080,
    https: false
  }
})
