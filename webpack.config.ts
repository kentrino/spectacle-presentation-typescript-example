"use strict"

import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import NodePolyfillPlugin from "node-polyfill-webpack-plugin"

// Customized babel loader with the minimum we need to get `mdx` libraries
// working, which unfortunately codegen JSX instead of JS.
const babelLoader = {
    loader: require.resolve("babel-loader"),
    options: {
        // Use user-provided .babelrc
        babelrc: true,
        // ... with some additional needed options.
        presets: [require.resolve("@babel/preset-react")],
    },
}

/**
 * Base configuration for the CLI, core, and examples.
 */

module.exports = {
    mode: "development",
    entry: "./src/index.tsx", // Default for boilerplate generation.
    output: {
        path: path.resolve("dist"),
        filename: "deck.js",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
        extensions: [".js", ".ts", ".tsx"],
    },
    devtool: "source-map",
    module: {
        // Not we use `require.resolve` to make sure to use the loader installed
        // within _this_ project's `node_modules` traversal tree.
        rules: [
            {
                test: /\.tsx?$/,
                use: [babelLoader],
            },
            // `.md` files are processed as pure text.
            {
                test: /\.md$/,
                use: [require.resolve("raw-loader")],
            },
            // `.mdx` files go through babel and our mdx transforming loader.
            {
                test: /\.mdx$/,
                use: [babelLoader, require.resolve("spectacle-mdx-loader")],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [require.resolve("file-loader")],
            },
        ],
    },
    // Default for boilerplate generation.
    plugins: [
        new HtmlWebpackPlugin({
            title: "Presentation",
            template: "./src/index.html",
        }),
        new NodePolyfillPlugin(),
    ],
}
