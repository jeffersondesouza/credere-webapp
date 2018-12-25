const gulp = require('gulp');
const clean = require('gulp-clean');
const usemin = require('gulp-usemin');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const jshintStylish = require('jshint-stylish');
const csslint = require('gulp-csslint');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');


const mocha = require('gulp-mocha');
const chai = require('chai');
const sinon = require('sinon');

sass.compile = require('node-sass');


gulp.task('default', ['copy'], function () {
  return gulp.start('build-img', 'usemin');
});


gulp.task('usemin', function () {
  return gulp.src('src/**/*.html')
    .pipe(usemin({
      js: [babel({ presets: ['es2015'] }), uglify],
      css: [autoprefixer, cssmin]
    }))
    .pipe(gulp.dest('dist'));
});


gulp.task('copy', ['clean'], function () {
  return gulp.src('src/img/**')
    .pipe(gulp.dest('dist/img'));
});


gulp.task('clean', function () {
  return gulp.src('dist')
    .pipe(clean());
});


gulp.task('build-img', function () {

  return gulp.src('dist/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});



/**
 * SERVER TASKS
 */
gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: 'src',

    },
    port: '8080'

  });

  gulp.watch("src/sass/**/*.scss", ['sass']);
  gulp.watch("src/app/**/*.js", ['jshint']);

  gulp.watch('src/**/*').on('change', browserSync.reload);

});

gulp.task('sass', function () {
  return gulp.src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});


gulp.task('csslint', function () {
  return gulp.src("src/css/**/*.css")
    .pipe(csslint())
    .pipe(csslint.formatter('compact'))
    .pipe(browserSync.stream());
});


gulp.task('jshint', function () {
  return gulp.src("src/app/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish))
    .pipe(browserSync.stream());
});

/**
 * TESTS TASKS
 */
gulp.task('test', function () {
  browserSync.init({
    startPath: '/SpecRunner.html',
    server: {
      baseDir: 'tests',
    },
  });

  gulp.watch(['src/**/*', 'tests/**/*']).on('change', browserSync.reload);

});

