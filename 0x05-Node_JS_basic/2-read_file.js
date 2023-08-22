const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const newResult = [];
    
    data.split('\n').forEach((data) => {
      result.push(data.split(','));
    });
    newResult.shift();
    const update = [];
    newResult.forEach((data) => update.push([data[0], data[3]]));
    const fields = new Set();
    update.forEach((item) => fields.add(item[1]));
    const final = {};
    fields.forEach((data) => { (final[data] = 0); });
    update.forEach((data) => { (final[data[1]] += 1); });
    console.log(`Number of students: ${result.filter((check) => check.length > 3).length}`);
    Object.keys(final).forEach((data) => console.log(`Number of students in ${data}: ${final[data]}. List: ${update.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
