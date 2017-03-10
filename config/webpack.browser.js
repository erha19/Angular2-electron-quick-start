/**
 * @author: @simplefatty
 */
const helpers = require('./helpers');
const config = require('./config');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
/*
 * Webpack Constants
 */
const ENV = process.env.NODE_ENV;
/*
 * Webpack Configuration
 */

module.exports = function(options) {
    return webpackMerge(commonConfig({ env: ENV }), {
        /**
         * Developer tool to enhance debugging
         *
         * See: http://webpack.github.io/docs/configuration.html#devtool
         * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
         */
        devtool: 'cheap-module-source-map',

        entry: {
            'polyfills': './src/polyfills.ts',
            'vendor': './src/vendor.ts',
            'app': './src/main.browser.ts',
        },
        /**
         * Options affecting the output of the compilation.
         *
         * See: http://webpack.github.io/docs/configuration.html#output
         */
        // Config for our build files
        output: {
            path: helpers.rootNode('dist'),
            filename: '[name].bundle.js',
            sourceMapFilename: '[name].map',
            chunkFilename: '[id].chunk.js',
            library: 'ac_[name]',
            libraryTarget: 'var'
        },
        plugins: [
            /**
             * Plugin: DefinePlugin
             * Description: Define free variables.
             * Useful for having development builds with debug logging or adding global constants.
             *
             * Environment helpers
             *
             * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
             */
            // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
            new DefinePlugin({
                'ENV': JSON.stringify(config.metadata.ENV),
                'HMR': config.metadata.HMR,
                'process.env': {
                    'ENV': JSON.stringify(config.metadata.ENV),
                    'NODE_ENV': JSON.stringify(config.metadata.ENV),
                    'HMR': config.metadata.HMR,
                }
            }),

            /**
             * Plugin: NamedModulesPlugin (experimental)
             * Description: Uses file names as module name.
             *
             * See: https://github.com/webpack/webpack/commit/a04ffb928365b19feb75087c63f13cadfc08e1eb
             */
            //   new NamedModulesPlugin(),

            /**
             * Plugin LoaderOptionsPlugin (experimental)
             *
             * See: https://gist.github.com/sokra/27b24881210b56bbaff7
             */
            new LoaderOptionsPlugin({
                debug: true,
                options: {
                    /**
                     * Static analysis linter for TypeScript advanced options configuration
                     * Description: An extensible linter for the TypeScript language.
                     *
                     * See: https://github.com/wbuchwalter/tslint-loader
                     */
                    tslint: {
                        emitErrors: false,
                        failOnHint: false,
                        resourcePath: 'src'
                    }
                }
            }),
            /*
             * Plugin: HtmlWebpackPlugin
             * Description: Simplifies creation of HTML files to serve your webpack bundles.
             * This is especially useful for webpack bundles that include a hash in the filename
             * which changes every compilation.
             *
             * See: https://github.com/ampedandwired/html-webpack-plugin
             */
            new HtmlWebpackPlugin({
                template: 'src/app/index.html',
                title: config.metadata.title,
                metadata: config.metadata,
                chunksSortMode: 'dependency',
                inject: 'head'
            }),
            /*
             * Plugin: ScriptExtHtmlWebpackPlugin
             * Description: Enhances html-webpack-plugin functionality
             * with different deployment options for your scripts including:
             *
             * See: https://github.com/numical/script-ext-html-webpack-plugin
             */
            new ScriptExtHtmlWebpackPlugin({
                defaultAttribute: 'defer'
            }),

        ],
        /**
         * Webpack Development Server configuration
         * Description: The webpack-dev-server is a little node.js Express server.
         * The server emits information about the compilation state to the client,
         * which reacts to those events.
         *
         * See: https://webpack.github.io/docs/webpack-dev-server.html
         */
        devServer: {
            port: config.metadata.port,
            host: config.metadata.host,
            historyApiFallback: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            outputPath: helpers.rootNode('dist')
        },
        /*
         * Include polyfills or mocks for various node stuff
         * Description: Node configuration
         *
         * See: https://webpack.github.io/docs/configuration.html#node
         */
        node: {
            global: true,
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }

    });

}