var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var sass            = require('gulp-sass');
var prefix          = require('gulp-autoprefixer');
var cp              = require('child_process');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var rename          = require('gulp-rename');
var minifyCSS       = require('gulp-minify-css');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// Build the Jekyll Site
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

// Rebuild Jekyll & do page reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

// Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
// gulp.task('sass', function () {
//     return gulp.src('_assets/scss/global.scss')
//         .pipe(sass({
//             includePaths: ['_assets/scss'],
//             onError: browserSync.notify
//         }))
//         // .pipe(prefix(['last 3 versions', '> 1%'], { cascade: true }))
//         // .pipe(minifyCSS())
//         // .pipe(gulp.dest('_assets/css'))
//         .pipe(gulp.dest('_site/assets/css'))
//         .pipe(browserSync.reload({stream:true}))
//         .pipe(gulp.dest('_assets/css'));
// });
gulp.task('sass', function () {
    return gulp.src('_scss/global.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%'], { cascade: true }))
        .pipe(minifyCSS())
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
// gulp.task('scripts', function() {
//     return gulp.src('_assets/js/*.js')
//         .on('error', swallowError)
//         .pipe(concat('script.js'))
//         .pipe(gulp.dest('_site/assets/js'))
//         .pipe(rename('script.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('_site/assets/js'));
// });

// Watch scss files for changes & recompile
// Watch html/md files, run jekyll & reload BrowserSync
gulp.task('watch', function () {
    gulp.watch('_scss/**/*.scss', ['sass']);
    gulp.watch(['index.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});


// Default task, running just `gulp` will compile the sass, compile the jekyll site, launch BrowserSync & watch files.
gulp.task('default', ['browser-sync', 'watch']);