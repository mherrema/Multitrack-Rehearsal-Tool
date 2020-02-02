const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const webpack = require('webpack')

module.exports = withCSS(withSass({
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
        return config
    }
}))