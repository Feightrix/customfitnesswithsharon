var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

// Settings
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

var autoprefixerOptions = {
  browsers: ['last 3 versions', '> 1%', 'Firefox ESR']
};


// Sass task
gulp.task('sass', function() {
    gulp.src('src/sass/screen.scss')
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('css/'));
});

// Concat and minify scripts
gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(concat('base.js'))
    .pipe(uglify())
    .pipe(gulp.dest('scripts'));
});

// Watch files for changes
gulp.task('default',function() {
    
    // If any of these files change, run the 'sass' task
    gulp.watch('src/sass/**/*.scss',['sass']),

    // If any of these files change, run the 'scripts' task
    gulp.watch('src/scripts/**/*.js', ['scripts']);
});