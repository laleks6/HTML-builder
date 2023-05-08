const fs = require('fs');
const path = require('path');
const pathDoc = path.join(__dirname, 'secret-folder');

const fileInformation = () => {
  fs.readdir(pathDoc, {withFileTypes: true}, (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach((el) => {
        if (!el.isDirectory()) {
          el = el.name;
          let pathCount = path.join(pathDoc, el);
          stat(pathCount, el);
        }
      });
    }
  });
};
fileInformation();

const stat = (pathCount, el) => {
  fs.stat(pathCount,  (err, stats) => {
    if (err) console.log(err);
    else {
      stats.size = `${(stats.size / 1024).toFixed(3)}kb`;
      console.log(`${el.slice(0, el.lastIndexOf('.'))} - ${el.slice(el.lastIndexOf('.') + 1)} - ${stats.size}`);
    }
  });
};
