var fs = require('fs');
//like import

fs.readFile('demo.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});