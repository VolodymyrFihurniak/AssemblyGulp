import path from 'path';

const rootFolder = path.basename(path.resolve());
const buildFoler = './dist';
const srcFolder = './src';

export default {
  build: {
    files: `${buildFoler}/`,
  },
  src: {
    files: `${srcFolder}/**/**/*.*`,
  },
  watch: {
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
