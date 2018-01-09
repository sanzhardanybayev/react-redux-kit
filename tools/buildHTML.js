/* eslint-disable no-unused-vars */
// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.
import fs from 'fs';
import fse from 'fs-extra';
import cheerio from 'cheerio';
import colors from 'colors';
import path from 'path';

/*  eslint-disable no-console */
const html = path.join(__dirname, '../src/index.html');

fs.readFile(html, 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }
  const $ = cheerio.load(markup);


  // since a separate spreadsheet is only utilized for the production build,
  // need to dynamically add this here.
  // $('head').prepend('<link rel="stylesheet" href="styles.css">');

  const finalHTML = path.join(__dirname, '../dist/index.html');

  fse.copy(path.join(__dirname, '../images'), path.join(__dirname, '../dist/images'), (saveImageError) => {
    if (saveImageError) {
      console.error(saveImageError);
    } else {
      console.log('IMAGES FOLDER COPIED!'.green);
      return 1;
    }
    return 0;
  });

  fs.unlink(finalHTML, () => {
    fs.writeFile(finalHTML, $.html(), 'utf8', (error) => {
      if (error) {
        return console.log(error);
      }
      console.log('index.html written to /dist'.green);
      return 1;
    });
  });

  return 0;
});

