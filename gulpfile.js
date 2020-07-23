var gulp = require('gulp');
var sass = require('gulp-sass');

//Compile Sass
gulp.task('sass', function(){
    return gulp.src('src/scss/**/*.scss')
      .pipe(sass()) 
      .pipe(gulp.dest('dist/css'))
  });

//Watch for changes
gulp.task('watch', function(){
    gulp.watch('src/scss/**/*.scss', gulp.series(['sass'])); 
  })