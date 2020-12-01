const {src, dest, series} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const autoPrefixerHTML = require('gulp-html-autoprefixer');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');
const useref = require('gulp-useref');
const purgecss = require('gulp-purgecss');

//MINFICAR HMTL
function minifyHTML(){
    return (
        src('src/index.html')
            .pipe(autoPrefixerHTML())
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(rename(".min.html"))
            .pipe(dest('dist'))
    );
}

// Minificar Js
function minifyJs() {
    return (
      src('src/**/*.js')
        .pipe(uglify())
        .pipe(rename('min.js'))
        .pipe(dest('dist'))
    );
}

// Minificar CSS
function minifyCSS() {
    return src('src/**/**/*.css')
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(concat('all.css'))
      .pipe(dest('dist'));
}
function autoPrefixerCSS() {
    return src('src/**/**/*.css')
      .pipe(
        autoprefixer({
          cascade: false,
        }),
      )
      .pipe(dest('dist'));
  }
  function cleanCss() {
    return src('src/**/**/*.css')
      .pipe(
        purgecss({
          content: ['src/**/*.html'],
        }),
      )
      .pipe(dest('dist/clean'));
  }
  function bundle() {
    return src('src/*.html').pipe(useref()).pipe(dest('dist'));
  }

  exports.default = series(
    minifyJs,
    minifyHTML,
    minifyCSS,
    autoPrefixerCSS,
    cleanCss,
    bundle,
  );
