module.exports = {
    pages: {
        dashboard: {
            entry: './src/pages/dashboard/main.js',
            template: 'public/index.dashboard.html',
            // filename:'dashboard.html'
        },
    },
    filenameHashing: false,
    // configureWebpack: {
    //     output: {
    //         filename: "[name].js",
    //         chunkFilename: "[name].js"
    //     },
    //     css: {
    //         extract: {
    //             filename: '[name].css',
    //         },
    //     },
    // },
    pluginOptions: {
    },
};