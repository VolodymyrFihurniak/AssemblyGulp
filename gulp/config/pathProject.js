import path from 'path';

const rootFolder = path.basename(path.resolve());
const buildFoler = './dist';
const srcFolder = './src';

export default {
  build: {
    html: `${buildFoler}/`,
    img: `${buildFoler}/img/`,
    files: `${buildFoler}/`,
  },
  src: {
    html: [`${srcFolder}/html/*.html`, `!${srcFolder}/html/_*.html`],
    img: `${srcFolder}/img/**/*.{jpg,png,svg,ico,webp}`,
    files: `${srcFolder}/**/**/*.*`,
  },
  watch: {
    html: `${srcFolder}/html/**/*.html`,
    img: `${srcFolder}/img/**/*.{jpg,png,svg,ico,webp}`,
    files: `${srcFolder}/**/**/*.*`,
  },
  clean: buildFoler,
  // eslint-disable-next-line object-shorthand
  buildFoler: buildFoler,
  // eslint-disable-next-line object-shorthand
  srcFolder: srcFolder,
  // eslint-disable-next-line object-shorthand
  rootFolder: rootFolder,
  ftp: `${true}`,
};
