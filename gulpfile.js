const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

gulp.task('serve', function() {
    browserSync.init({
        server: true,
        port: 5000
    });

    gulp.watch('index.html').on('change', reload);
    gulp.watch('css/*.css').on('change', reload);
    gulp.watch('js/*.js').on('change', reload);
});
