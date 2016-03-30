var gulp = require('gulp');
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

// 复制Jekyll模板
gulp.task('build:jekyll', function(){
    var base = './bower_components/jekyll-blog-templet/jekyll';
    gulp.src(base + '/**', { base: base })
    .pipe(gulp.dest('./dist'));
});

// 构建jekyll-blog-app博客应用
gulp.task('build:app', function(){
    gulp.src(['scripts/**', 'styles/**', 'categories.json', 'settings.json', 'index.html'], { base: './node_modules/jekyll-blog-app/dist' })
    .pipe(gulp.dest('./dist'));
});

// 执行构建任务
gulp.task('build', function(cb){
    runSequence('build:clean', 'build:blog', ['build:jekyll', 'build:app'], cb);
});

gulp.task('default', ['build']);
