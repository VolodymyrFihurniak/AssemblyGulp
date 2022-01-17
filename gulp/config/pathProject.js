import path from 'path';

const rootFolder = path.basename(path.resolve());
const buildFoler = './dist';
const srcFolder = './src';

export default {
  build: {
    html: `${buildFoler}/`,
    css: `${buildFoler}/css/`,
    img: `${buildFoler}/img/`,
    js: `${buildFoler}/js/`,
    fonts: `${buildFoler}/fonts/`,
    files: `${buildFoler}/`,
  },
  src: {
    html: [`${srcFolder}/html/*.html`, `!${srcFolder}/html/_*.html`],
    scss: `${srcFolder}/scss/style.scss`,
    img: `${srcFolder}/img/**/*.{jpg,png,svg,ico,webp}`,
    js: `${srcFolder}/js/**/*.js`,
    fonts: `${srcFolder}/fonts/*.{otf,ttf}`,
    files: `${srcFolder}/**/**/*.*`,
  },
  watch: {
    html: `${srcFolder}/html/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    img: `${srcFolder}/img/**/*.{jpg,png,svg,ico,webp}`,
    js: `${srcFolder}/js/**/*.js`,
    files: `${srcFolder}/**/**/*.*`,
  },
  clean: buildFoler,
  buildFoler,
  srcFolder,
  rootFolder,
  ftp: `${true}`,
};
