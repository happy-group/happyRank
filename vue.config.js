module.exports = {
  devServer: {
    host: 'localhost', // 项目启动IP
    port: 4000, // 项目启动端口号
    https: false, // 不开启https
    hot: true, // 开启热更新
    proxy: {
      '/api/*': { // 代理 /api 前缀的接口
        target: 'http://127.0.0.1:5000', // 服务器地址
        changeOrigin: true, // 是否跨域
        ws: false, // websocket开启
				secure: false // https开启
      }
    }
  },
  outputDir: 'dist', // 打包文件的文件名
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  productionSourceMap: false, //生产环境是否生成 sourceMap 文件
}
