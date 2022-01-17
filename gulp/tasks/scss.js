import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

/* eslint-disable no-undef */
export default function scss() {
  return app.gulp.src(app.path.src.scss, { sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'SCSS',
        message: 'Error: <%= error.message %>',
      }),
    ))
    .pipe(sass({
      outputStyle: 'expanded',
    }))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(groupCssMediaQueries())
    .pipe(webpcss({
      webpClass: '.webp',
      noWebpClass: '.no-webp',
    }))
    .pipe(autoPrefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions'],
      cascade: true,
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(app.plugins.rename({
      extname: '.min.css',
    }))
    .pipe(app.gulp.dest(`${app.path.build.css}min/`))
    .pipe(app.plugins.browsersync.stream());
}
