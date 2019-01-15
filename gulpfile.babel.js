'use strict';

import browser  from 'browser-sync';
import fs       from 'fs';
import gulp     from 'gulp';
import panini   from 'panini';
import plugins  from 'gulp-load-plugins';
import rimraf   from 'rimraf';
import sherpa   from 'style-sherpa';
import svgo     from 'gulp-svgo';
import yaml     from 'js-yaml';
import yargs    from 'yargs';

const $ = plugins();
const ARGS = yargs.argv;
const PRODUCTION = !!(ARGS.production);
const { COMPATIBILITY, PORT, PATHS } = loadConfig();

function loadConfig() {
    let ymlFile = fs.readFileSync('config.yml', 'utf8');
    return yaml.load(ymlFile);
}

gulp.task('serve',
    gulp.series(
        clean,
        gulp.parallel(pages, sass),
        server,
        watch
    ));

gulp.task('build',
    gulp.series(
        clean,
        gulp.parallel(pages, sass)
    ));

gulp.task('default',
    gulp.series(
        'serve'
    ));

function clean(done) {
    rimraf(PATHS.dist, done);
}

function pages() {
    return gulp.src('src/pages/**/*.{html,hbs,handlebars}')
        .pipe(panini({
            root: 'src/pages/',
            layouts: 'src/layouts/',
            partials: 'src/partials/',
            data: 'src/data/',
            helpers: 'src/helpers/'
        }))
        .pipe(gulp.dest(PATHS.dist));
}

function resetPages(done) {
    panini.refresh();
    done();
}

function sass() {
    return gulp.src('src/assets/scss/layers.scss')
        .pipe($.if(!PRODUCTION, $.sourcemaps.init()))
        .pipe($.sass({
            includePaths: PATHS.sass
        })
        .on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: COMPATIBILITY
        }))
        .pipe($.if(PRODUCTION, $.cleanCss({ compatibility: 'ie9' })))
        .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
        .pipe(gulp.dest(PATHS.dist + '/css'))
        .pipe(browser.reload({ stream: true }));
}

function server(done) {
    browser.init({
        server: PATHS.dist,
        port: PORT
    });
    done();
}

function reload(done) {
    browser.reload();
    done();
}

function watch() {
    gulp.watch('src/pages/**/*.html').on('all', gulp.series(pages, browser.reload));
    gulp.watch('src/{layouts,partials}/**/*.html').on('all', gulp.series(resetPages, pages, browser.reload));
    gulp.watch('src/assets/scss/**/*.scss').on('all', gulp.series(sass, browser.reload));
}
