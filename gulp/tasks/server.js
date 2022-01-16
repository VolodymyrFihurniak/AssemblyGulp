/* eslint-disable no-undef */
export default function server() {
  app.plugins.browsersync.init({
    server: {
      baseDir: app.path.build.html,
    },
    notify: false,
    port: 3000,
  });
}
