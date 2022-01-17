import replace from 'gulp-replace';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import notify from 'gulp-notify';
import ifPlugin from 'gulp-if';
import browsersync from 'browser-sync';

export default {
  replace,
  rename,
  plumber,
  newer,
  notify,
  if: ifPlugin,
  browsersync,
};
