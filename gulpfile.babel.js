import gulp from 'gulp';

import pathProject from './gulp/config/pathProject';
import plugins from './gulp/config/plugins';

import server from './gulp/tasks/server';
import reset from './gulp/tasks/reset';
import html from './gulp/tasks/html';
import img from './gulp/tasks/img';

global.app = {
  path: pathProject,
  gulp,
  plugins,
};

const watcher = () => {
  gulp.watch(pathProject.watch.html, html);
  gulp.watch(pathProject.watch.html, img);
};

const mainTask = gulp.parallel(html, img);

const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));

gulp.task('default', dev);
