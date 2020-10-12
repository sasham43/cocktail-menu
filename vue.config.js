// const configureAPI = require('./src/server/configure')

// module.exports = {
//     devServer: {
//         before: configureAPI
//     }
// }
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Crump Cocktails'
                return args
            })
    }
}