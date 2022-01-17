import webpack from 'webpack-stream';

/* eslint-disable no-undef */
export default function js() {
  return app.gulp.src(app.path.src.js, { sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'JS',
        message: 'Error: <%= error.message %>',
      }),
    ))
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'app.min.js',
      },
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
}
