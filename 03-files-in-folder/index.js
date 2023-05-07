const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;
const pathSecretFolder = 'secret-folder';
// в reddir => else  => foreach  хочу запихнуть fs stat  для каждой итерации в path  для stat  будет добовлятся el
let pathDoc = path.join(__dirname, pathSecretFolder);
console.log(pathDoc);
fs.readdir(pathDoc,  (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach((el) => {
      console.log(el.slice(0, el.lastIndexOf('.')));
    });
    console.log(files);
  }
});
fs.stat(pathDoc,  (err, stats) => {
  if (err) console.log(err);
  else {
    console.log(stats.size);
  }
});