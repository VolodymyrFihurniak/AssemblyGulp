/* eslint-disable no-undef */
export default function html() {
  return app.gulp.src(app.path.src.img)
    .pipe(app.gulp.dest(app.path.build.img));
}
