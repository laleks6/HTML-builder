
const fs = require('fs');
const path = require('path');
const pathText = path.join(__dirname, 'text.txt');
const readableStream = fs.createReadStream(pathText, 'utf-8');
let data = ''; 
readableStream.on('data', chunk => {
  data += chunk;
});
readableStream.on('end', () => {
  console.log('End', data);
});

