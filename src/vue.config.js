// path是node里面的核心模块，不需要下载依赖，可直接使用
const path = require('path')
module.exports = {
  publicPath: '/cms-manage/',
  outputDir: 'dist', // 打包的目录名
  // 配置本地服务器
  devServer: {
    host: '127.0.0.1',
    port: 3011,
    open: true, // 可直接打开浏览器，默认是false
    openPage: 'cms-manage/', // 打开路径
    // 后续还有代理
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    // 设置别名 src设为绝对路径
    config.resolve.alias.set('@', path.resolve(__dirname, './src'))
  },
}

// 既然使用了插件，不要忘记下载依赖 style-resource  style-resources-loader 注意版本
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/mixin.less'),
      ],
    })
}