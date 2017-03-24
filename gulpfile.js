const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

gulp.task('serve', function() {
    browserSync.init({
        server: true,
        port: 5000
    });

    gulp.watch('**/*.html').on('change', reload);
    gulp.watch('**/*.css').on('change', reload);
    gulp.watch('**/*.js').on('change', reload);
});
