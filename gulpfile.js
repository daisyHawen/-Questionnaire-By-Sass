/*var gulp=require('gulp');
gulp.task('hello',function(){
console.log('Hello sass');
})*/
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
	//sass()方法用于转换sass到css
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});

//Watching Sass files for changes
gulp.task('watch', function(){
	//当scss文件变动的时候调用sass任务进行处理
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
})