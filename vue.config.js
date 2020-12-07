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
}