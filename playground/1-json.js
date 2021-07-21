const fs = require('fs');

const dataBuffer = fs.readFileSync('file-1.JSON');

const alien = JSON.parse(dataBuffer.toString());

console.log(alien);
 alien.name='Niteesh';
 alien.planet='Moon';
 alien.age=29;

 fs.writeFileSync('file-1.JSON', JSON.stringify(alien));
