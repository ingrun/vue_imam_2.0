// vue.config.js
module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  baseUrl: '/',
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8081/',
        changeOrigin: true,

      }
    }
  }
}
// .env.development
// VUE_APP_BASE_API=/api