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
    tips.forEach(function(tip) {
      const rawText = tip.text;
      tip.title = '';
      tip.subtexts= [];

      const level1 = rawText.split('%');
      tip.title = level1[0];

      for (var i = 1; i < level1.length; i++) {
        const level2 = level1[i].split('`');
        tip.subtexts.push({level: 1, text: level2[0]});

        for (var j = 1; j < level2.length; j++) {
          tip.subtexts.push({level: 2, text: level2[j]});
        }
      }
      tip.text = tip.text.toLowerCase();
    });
    const json = JSON.stringify(tips);
    fs.writeFile('js/tips.json', json, 'utf8', function() {
      console.log('written to js/tips.json')
    })
  });

stream.pipe(csvStream);
