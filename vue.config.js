module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                //名字可以自定义，这里我用的是api
                "/api": {
                    // target: 'http://pdkf.ibabycloud.cn/',
                    target: 'http://tdqk.seabo365.com/',
                    changeOrigin: true,//这里设置是否跨域
                    pathRewrite: {
                        '^/api': ''
                    }
                }
            }
        }
    }
}
