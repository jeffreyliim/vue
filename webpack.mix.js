let mix = require('laravel-mix');

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

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/quiz.scss','public/css')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .sass('resources/assets/sass/react.scss', 'public/css')
    .js('resources/assets/js/chart.js', 'public/js')
    .js('resources/assets/js/react.js', 'public/js');


mix.react('resources/assets/js/react/myreact.jsx', 'public/js');

if (mix.inProduction()) {
    mix.version();
}
