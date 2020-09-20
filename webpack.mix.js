const mix = require('laravel-mix');
require('laravel-mix-postcss-config');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('src/js/app.js', 'public/js')
    .sass('src/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [
            require('tailwindcss')('./tailwind.config.js'),
            require('postcss-font-magician')({
                display: 'swap',
            }),
        ],
    })
    .sourceMaps();
