const fs = require('fs');
const path = require('path');
const creatNotesPath = path.join(__dirname, 'project-dist');
const pathFails = path.join(__dirname, 'assets');

async function creatNotes (path) {
  fs.mkdir(path, { recursive: true, force: true }, err => {
    if (err) {
      console.log('уЖЕ СОЗДАНА ПАПКА');
    }
    else console.log('CREAT NOTES');
  });
}
creatNotes(creatNotesPath);

fs.writeFile(path.join(__dirname, 'project-dist', 'index.html'), '', (err) => {
  if (err) throw err;
  console.log('Файл был создан');});

fs.writeFile(path.join(__dirname, 'project-dist', 'style.css'), '', (err) => {
  if (err) throw err;
  console.log('Файл был создан');});

async function copyDir (pathElem) {
  let p;
  return fs.readdir(pathElem, {withFileTypes: true}, (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach((el) => {
        let element = el.name;
        if (element === 'assets') {
          console.log(element);
          creatNotes(creatNotesPath, `${element}`);
          copyDir(pathFails);
        }
        if (pathElem === pathFails) {
          console.log(element);
          if(el.isDirectory()) {
            p = path.join(pathFails, `${element}`);
            creatNotes(p);
          }
        }
         
      });
    }
  });
}
copyDir(__dirname);