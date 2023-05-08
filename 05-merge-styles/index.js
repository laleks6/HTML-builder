const fs = require('fs');
const path = require('path');
const cratFaile = path.join(__dirname, 'project-dist', 'bundle.css');
const styleNotes = path.join(__dirname, 'styles');


async function mergeStyles () {
    
  fs.writeFile(cratFaile, '', (err) => {
    if (err) throw err;
    console.log('Файл был создан');
  });
  fs.readdir(styleNotes, {withFileTypes: true}, (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach((el) => {
        el = el.name;
        if(el.slice(el.lastIndexOf('.') + 1 ) === 'css') {
          console.log(el);
          let readableStream = fs.createReadStream(path.join(styleNotes, `${el}`), 'utf-8');
          readableStream.on('data', chunk => {
            fs.appendFile(cratFaile, chunk, err => {
              if (err) throw err;
              console.log('Файл был изменен');
            });
          });
    
        }
      });
    }
  });
}
mergeStyles();

