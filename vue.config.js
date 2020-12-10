const { resolve } = require('path')
const path = require('path')
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://9090', //接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
    // chainWebpack: (config) => {
    //     config.resolve.alias
    //         .set('@', resolve('src'))
    //         .set('@assets', resolve('src/assets'))
    //         .set('@components', resolve('src/components'))
    //         .set('@store', resolve('src/store'))
    //         .set('@views', resolve('src/views'))
    // }
}