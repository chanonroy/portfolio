var gulp = require('gulp');
var sass = require('gulp-sass');              // compile scss to css
var prefix = require('gulp-autoprefixer');    // autoprefix css
var uglify = require('gulp-uglify');          // minify js
var plumber = require('gulp-plumber');        // fixes 'watch' breaking on error
var babel = require('gulp-babel');            // compile ES6 into ES5
var del = require('del');                     // clear folder
var watch = require('gulp-watch');            // watches for files added/deleted

// Directory paths
var inputDir = './src/';
var outputDir = './dist/';

// 'gulp clean' - cleans and returns promise
gulp.task('clean', function() {
  return del.sync([outputDir]);
});

// 'gulp styles' - compiles scss, autoprefixes
gulp.task('styles', function() {
  return gulp.src(inputDir + 'scss/*.scss')
             .pipe(plumber())
             .pipe(sass({ outputStyle:'compressed' })) // expanded/compressed
             .pipe(prefix('last 2 versions'))
             .pipe(gulp.dest(outputDir + 'css'));
});

// 'gulp scripts' - minifies JS
gulp.task('scripts', function() {
  return gulp.src(inputDir + 'js/*.js')
             .pipe(plumber())
             .pipe(babel({ presets: ['es2015'] }))
             .pipe(uglify())
             .pipe(gulp.dest(outputDir + 'js'));
});

// 'gulp assets' - moves images into dist, TODO: image min plugins
gulp.task('assets', function() {
  return gulp.src(inputDir + 'assets/**/*')
    .pipe(gulp.dest(outputDir + 'assets'));
});

// automatic detection of changes triggers relevant gulp task
gulp.task('watch', function() {

  watch(inputDir + 'js/**/*.js', function() {
    gulp.run('scripts');
  });

  watch(inputDir + 'assets/**/*', function(){
    gulp.run('assets');
  });

  watch(inputDir + 'scss/*.scss', function() {
    gulp.run('styles');
  });
});

// gulp for building all tasks, no watching (for deployment hook)
gulp.task('build', ['styles', 'scripts', 'assets']);

// default task (called when you run 'gulp' from CLI)
gulp.task('default', ['clean', 'watch', 'styles', 'scripts', 'assets']);
