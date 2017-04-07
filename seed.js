const fs = require('fs');
const csv = require('fast-csv');

// Uses the first csv file it finds
var csvFile = '';
const files = fs.readdirSync('.')
files.forEach(function(file) {
  if (file.endsWith('.csv')) {
    csvFile = file;
    return;
  }
});

if (csvFile.length === 0) {
  console.log('CSV file not found');
  process.exit(1);
} else {
  console.log('using ' + csvFile);
}

const stream = fs.createReadStream(csvFile);
 
const tips = [];
var columnNames = [];
var first = true;
const csvStream = csv()
  .on('data', function(data){
    // whatever
    if (first) {
      columnNames = data.map(function(d) {
        return d.toLowerCase();
      });
      first = false;
    } else {
      const tip = {};
      for (var i = 0; i < columnNames.length; i++) {
        tip[columnNames[i]] = data[i];
      }
      tips.push(tip);
    }
  })
  .on('end', function() {
    const json = JSON.stringify(tips);
    fs.writeFile('js/tips.json', json, 'utf8', function() {
      console.log('written to js/tips.json')
    })
  });

stream.pipe(csvStream);
