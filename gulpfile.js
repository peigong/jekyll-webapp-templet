var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');

var config = {
    app: './node_modules/jekyll-blog-app/dist',
    templet: './bower_components/jekyll-blog-templet/jekyll',
    src: './src/**',
    dist: './blog'
};

// 清理目标目录
gulp.task('build:clean', function(cb){
    del([config.dist], cb);
});

// 复制jekyll-blog-app博客应用初始模板
gulp.task('build:blog', function(){
    gulp.src(config.src)
    .pipe(gulp.dest(config.dist));
});

// 复制Jekyll模板
gulp.task('build:jekyll', function(){
    gulp.src(['**'], { base: config.templet })
    .pipe(gulp.dest(config.dist));
});

// 构建jekyll-blog-app博客应用
gulp.task('build:app', function(){
    gulp.src(['scripts/**', 'styles/**', 'categories.json', 'settings.json', 'index.html'], { base: config.app })
    .pipe(gulp.dest(config.dist));
});

// 执行构建任务
gulp.task('build', function(cb){
    runSequence('build:clean', 'build:blog', ['build:jekyll', 'build:app'], cb);
});

gulp.task('default', ['build']);
