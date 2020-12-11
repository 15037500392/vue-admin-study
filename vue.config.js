/*
   * @Description: webpack 配置信息
   * @Author: zxx
   * @Date: 2020-12-03 14:19:27
 */
const path = require('path')
module.exports = {
  publicPath: '/', // 部署应用包时的基本URL
  outputDir: 'dist', // 放置生产环境构建文件的目录
  assetsDir: 'static', // 放置生成的静态资源的目录
  indexPath: 'index.html', // 指定生成的index.html的输出路径
  filenameHashing: false, // 关闭文件名哈希
  lintOnSave: 'default', // 是否开启eslint
  productionSourceMap: false, // 关闭生产环境的source map
  chainWebpack: config => {
    config.resolve.alias
      .set('@pages', path.resolve(__dirname, '/src/pages'))
      .set('@api', path.resolve(__dirname, '/src/api'))
      .set('@data', path.resolve(__dirname, '/src/common'))
      .set('@handleData', path.resolve(__dirname, '/src/handleData'))
      .set('@http', path.resolve(__dirname, '/src/http'))
      .set('@vuex', path.resolve(__dirname, '/src/vuex'))
      .set('@router', path.resolve(__dirname, '/src/router'))
      .set('@assets', path.resolve(__dirname, '/src/assets'))
  },
  devServer: {

  }
  // pages: {
  //   index: {
  //     entry: 'src/pages/Index/index.js', // page入口
  //     template: 'public/index.html', // 模板来源
  //     filename: 'index.html', // 在dist中的输出
  //     title: 'Index Page', // template 中的title标签需要是<title><%= htmlWebpackPlugin.options.title %></title>
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   }
  // }
}
