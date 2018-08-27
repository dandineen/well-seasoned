// Well seasoned Gulpfile

// Require Gulp and Gulp Sass
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Set variables for input and output directories
var input = './scss/**/*.scss';
var output = './css';

// Set the logging and output options
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  };
  

// Create basic Gulp task for compiling Sass
gulp.task('sass', function () {
    return gulp
        .src(input)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(output));
});

// Create a watch task
gulp.task('watch', function() {
    return gulp
      // Watch the input folder for change,
      // and run `sass` task when something happens
      .watch(input, ['sass'])
      // When there is a change,
      // log a message in the console
      .on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      });
  });

//   The default Gulp task
gulp.task('default', ['sass', 'watch' /*, possible other tasks... */]);