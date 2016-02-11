var gulp = require('gulp');


gulp.task('bootCss',function(){
    gulp.src('bower_components/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('Dist/css/'));
});

gulp.task('bootJs',function(){
    gulp.src('bower_components/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('Dist/js/'));
});

gulp.task('jQuery',function(){
    gulp.src('bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('Dist/js/'));
});

gulp.task('fonts',function(){
    gulp.src('bower_components/bootstrap/dist/fonts/*.*')
    .pipe(gulp.dest('Dist/fonts/'));
});

gulp.task('pasarBoo',['bootCss','bootJs','jQuery','fonts']);