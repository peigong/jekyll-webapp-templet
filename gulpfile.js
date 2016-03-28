var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(){
    del('./dist');
});

gulp.task('build', ['clean'], function(){
    gulp.src('./src/*')
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);
