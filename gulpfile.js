var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('build:clean', function(cb){
    del('./dist', cb);
});
gulp.task('build:blog', function(){
    gulp.src('./src/*')
    .pipe(gulp.dest('./dist'));
});
gulp.task('build:settings', function(){
    var base = './bower_components/jekyll-settings-sample/settings';
    gulp.src(base + '/*', { base: base })
    .pipe(gulp.dest('./dist'));
});
gulp.task('build:settings', function(){
    var base = './bower_components/jekyll-settings-sample/settings';
    gulp.src(base + '/*', { base: base })
    .pipe(gulp.dest('./dist'));
});
gulp.task('build', function(cb){
    runSequence('build:clean', ['build:blog', 'build:settings'], cb);
});

gulp.task('default', ['build']);
