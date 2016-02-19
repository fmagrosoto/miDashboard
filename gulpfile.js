var gulp = require('gulp'),
           uglify = require('gulp-uglify'),
           rename = require('gulp-rename'),
           minifyCSS = require('gulp-minify-css'),
           livereload = require('gulp-livereload');
           


// Tareas para pasar los archivos de distribución
// de Bootstrap a las carpetas de distribución del
// proyecto actual.

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

// Fin de tareas para Boostrap





// Minificar archivos javascript, guardarlos en otra carpeta y renombrarlos
gulp.task('minJS',function () {
	gulp.src('Source/js/*.js')
	.pipe(uglify())
	.pipe(rename({extname:'.min.js'}))
	.pipe(gulp.dest('Dist/js/'))
    .pipe(livereload());
});

// Minificar archivos css, guardarlos en otra carpeta y renombrarlos
gulp.task('minCSS',function () {
	gulp.src('Source/css/*.css')
	.pipe(minifyCSS())
	.pipe(rename({extname:'.min.css'}))
	.pipe(gulp.dest('Dist/css/'))
    .pipe(livereload());
});

gulp.task('liveHTML',function () {
    gulp.src('Dist/*.html')
    .pipe(livereload());
});


gulp.task('default',['minJS','minCSS','liveHTML']);

gulp.task('watch',function(){
    livereload.listen();
	gulp.watch('Source/js/*.js',['minJS']);
	gulp.watch('Source/css/*.css',['minCSS']);
    gulp.watch('Dist/*.html',['liveHTML']);
});

