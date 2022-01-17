import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

/* eslint-disable no-undef */
export default function html() {
  return app.gulp.src(app.path.src.img)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'IMG',
        message: 'Error: <%= error.message %>',
      }),
    ))
    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(app.plugins.if(app.isBuild, webp()))
    .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.img)))
    .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.img)))
    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(app.plugins.if(app.isBuild, imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 3,
    })))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.plugins.browsersync.stream());
}
