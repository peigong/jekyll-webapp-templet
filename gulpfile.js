var gulp = require('gulp');
var exec = require('gulp-exec');
var del = require('del');
var runSequence = require('run-sequence');

// 清理目标目录
gulp.task('build:clean', function(cb){
    del(['./dist'], cb);
});

// 复制jekyll-blog-app博客应用初始模板
gulp.task('build:blog', function(){
    gulp.src('./src/**')
    .pipe(gulp.dest('./dist'));
});

// 复制jekyll-blog-app博客应用配置样例
gulp.task('build:settings', function(){
    var base = './bower_components/jekyll-settings-sample/settings';
    gulp.src(base + '/**', { base: base })
    .pipe(gulp.dest('./dist'));
});

// 复制Jekyll模板
gulp.task('build:jekyll', function(){
    var base = './bower_components/jekyll-blog-templet/jekyll';
    gulp.src(base + '/**', { base: base })
    .pipe(gulp.dest('./dist'));
});

// 构建jekyll-blog-app博客应用
gulp.task('build:app', function(){
    var base = './bower_components/jekyll-blog-app';
    gulp.src(base + '/**', { base: base })
    .pipe(exec('grunt'))
    .pipe(gulp.dest('./dist'));
});

// 执行构建任务
gulp.task('build', function(cb){
    runSequence('build:clean', 'build:blog', ['build:settings', 'build:jekyll', 'build:app'], cb);
});

gulp.task('default', ['build']);
