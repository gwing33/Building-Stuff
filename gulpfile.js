var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var cache = require('gulp-cached');

//var notify = require('gulp-notify');
//var jest = require('gulp-jest');
//var rename = require('gulp-rename');
//var uglify = require('gulp-uglify');
//var plumber = require('gulp-plumber');
//var phantomcss = require('gulp-phantomcss');
//var transform = require('vinyl-transform');
//var browserify = require('browserify');
//var reactify = require('reactify');

// var _root_js_path = __dirname + '/Content/js';
// var _root_src_path = __dirname + '/Content/src';
var _root_less_path = __dirname + '/less';


/* * *
 * Front-end Testing...
 * * */
// gulp.task('jest', function () {
//   return gulp.src(_root_src_path + '/').pipe(jest({
//     scriptPreprocessor: _root_src_path + "/jest/preprocessor.js",
//     unmockedModulePathPatterns: [
//     "react", 'react-tools', 'lodash', 'events'
//     ],
//     moduleFileExtensions: ["js", "json", "jsx"]
//   }))
//   .on('error', notify.onError({
//     message: "Error: <%= error.message %>",
//     title: "Jest Error"
//   }));
// });


/* * *
 * Build out File
 * * */
// gulp.task('browserify', function() {
//   var browserified = transform(function(filename) {
//     var b = browserify(filename, {
//       extensions: ['.jsx'],
//       debug: true
//     });
//     b.transform(reactify);
//     return b.bundle();
//   });
//
//   gulp.src(_root_src_path + '/apps/*.jsx')
//   .pipe(plumber({
//     errorHandler: notify.onError(function(error) {
//       return "Compile Error " + error;
//     })
//   }))
//   .pipe(browserified)
//   .pipe(rename(function (path) {
//     path.extname = ".js";
//   }))
//   .pipe(gulp.dest(_root_js_path + '/build'));
// });


/* * *
 * Less Task
 * Takes the Less files and converts them to css files
 * Then places them in the Content/css folder
 * * */
gulp.task('less', function () {
  gulp.src([_root_less_path + '/**/*.less', '!' + _root_less_path + '/**/_*.less'])
    .pipe(cache('less'))
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./public/css/'));
});


/* * *
 * Watcher Task
 * Runs continually
 * * */
gulp.task('watch', function () {
  gulp.watch(_root_less_path + '/**/*.less', ['less']);
//   gulp.watch(_root_src_path + '/**/__tests__/**/*.js', ['jest']);
//   gulp.watch([_root_src_path + '/**/*.js', _root_src_path + '/**/*.jsx', '!' + _root_src_path + '/**/__tests__/**/*.js'], ['browserify']);
});

/* * *
 * just run `gulp`
 * * */
// gulp.task('default', ['less', 'browserify', 'build', 'jest', 'watch', 'watch-prod']);
// gulp.task('dev', ['less', 'browserify', 'jest', 'watch']);
// gulp.task('test-mode', ['jest', 'watch-test']);
