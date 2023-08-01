const fs = require('fs');
let file
fs.readFile('data.txt', function(err, data) {
    if (err) throw err;
    console.log(data.toString())
    file = data.toString();
    console.log(file.split(' ').length);
  });