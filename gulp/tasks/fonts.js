import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

/* eslint-disable no-undef */
const otfToTtf = () => app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'FONTS [OTF]',
      message: 'Error: <%= error.message %>',
    }),
  ))
  .pipe(fonter({
    formats: ['ttf'],
  }))
  .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));

const ttfToWoff = () => app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'FONTS [TTF]',
      message: 'Error: <%= error.message %>',
    }),
  ))
  .pipe(fonter({
    formats: ['woff'],
  }))
  .pipe(app.gulp.dest(app.path.build.fonts))
  .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
  .pipe(ttf2woff2())
  .pipe(app.gulp.dest(app.path.build.fonts));

function cb() {}

const fontsStyle = () => {
  const fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
  fs.readdir(app.path.build.fonts, (err, fontsFiles) => {
    if (fontsFile) {
      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, '', cb);
        let newFileOnly;
        for (let i = 0; i < fontsFiles.length; i += 1) {
          const fontFileName = fontsFiles[i].split('.')[0];
          if (newFileOnly !== fontFileName) {
            const fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : 'Not found';
            let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1].toLowerCase() : 'black';
            switch (fontWeight) {
              case 'extralight':
                fontWeight = 200;
                break;
              case 'light':
                fontWeight = 300;
                break;
              case 'regular':
                fontWeight = 400;
                break;
              case 'medium':
                fontWeight = 500;
                break;
              case 'semibold':
                fontWeight = 600;
                break;
              case 'bold':
                fontWeight = 700;
                break;
              case 'extrabold':
                fontWeight = 800;
                break;
              case 'black':
                fontWeight = 900;
                break;
              default: fontWeight = 1000;
            }
            fs.appendFile(fontsFile, `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
            newFileOnly = fontFileName;
          }
        }
      }
    } else {
      // eslint-disable-next-line no-console
      console.log('file exist');
    }
  });
  return app.gulp.src(`${app.path.srcFolder}`);
};

export {
  otfToTtf, ttfToWoff, fontsStyle,
};
