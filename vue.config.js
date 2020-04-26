module.exports = {
    devServer: {
        proxy: {
            '/xinxi': {
                target: 'http://localhost:8500/', // 对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/xinxi': '',
                },
            },
            '/ren': {
                target: 'http://localhost:8200/', // 对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/ren': '',
                },
            },
        },
    },
}
