import gulp from 'gulp';

import pathProject from './gulp/config/pathProject';
import plugins from './gulp/config/plugins';

import server from './gulp/tasks/server';
import reset from './gulp/tasks/reset';
import html from './gulp/tasks/html';
import scss from './gulp/tasks/scss';
import img from './gulp/tasks/img';
import js from './gulp/tasks/js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts';

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: pathProject,
  gulp,
  plugins,
};

const watcher = () => {
  gulp.watch(pathProject.watch.html, html);
  gulp.watch(pathProject.watch.scss, scss);
  gulp.watch(pathProject.watch.html, img);
  gulp.watch(pathProject.watch.js, js);
};

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTask = gulp.series(fonts, gulp.parallel(html, scss, img, js));

const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTask);

export {
  dev, build,
};

gulp.task('default', dev);
