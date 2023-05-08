const fs = require('fs');
const path = require('path');
const creatNotesPath = path.join(__dirname, 'files-copy');
const pathFails = path.join(__dirname, 'files');
console.log(__dirname);


async function copyDir () {
  return fs.readdir(pathFails, {withFileTypes: true}, (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach((el) => {
        el = el.name;
        fs.copyFile(path.join(__dirname, 'files', `${el}`), path.join(creatNotesPath, `${el}`), (err) => {
          if (err) {
            console.error(err);
          }   
        });
      });
    }
  });
}
async function delte () {
  await fs.promises.rm(path.join(creatNotesPath),  { recursive: true, force: true }, (err) => {
    console.log('File deleted successfully');
    if(err){
      console.error(err);
    }
  });
}
async function creatNotes () {
  await delte();
  fs.mkdir(creatNotesPath, { recursive: true, force: true }, err => {
    if (err) {
      console.log(err);
    }
    else console.log('CREAT NOTES');
  });
  copyDir();
}
creatNotes();






