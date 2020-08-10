const mix = require("laravel-mix");
const webpack = require("webpack");
require("dotenv").config({ path: process.env.ENV_FILE });

let _config = {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
};

Object.entries(process.env || {})
    .map(([key, val], idx) => {
        if (key.startsWith("VUE_APP_")) {
            return [key, val];
        } else {
            return null;
        }
    })
    .filter((v, idx) => {
        return !!v;
    })
    .forEach(([key, val]) => {
        _config[key] = JSON.stringify(val);
    });

mix.webpackConfig({
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "@": __dirname + "/resources/js",
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": _config,
        }),
    ],
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);
