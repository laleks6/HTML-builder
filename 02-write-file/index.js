
const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;
const creatFile = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(creatFile);

console.log('Введите данные для передачи:');
stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    process.exit();
  }
  output.write(data);
});

process.on('SIGINT', () => process.exit());
process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));


