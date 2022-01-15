/* eslint-disable no-undef */
export default function copy() {
  return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files));
}
