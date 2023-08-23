const fs = require('fs');

async function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw Error('Cannot load the database');
  }

  return new Promise((resolve) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        throw Error('Cannot load the database');
      }
      const result = [];
      const students = data.split('\n');
      students.forEach((studentData) => {
        result.push(studentData.split(','));
      });

      result.shift();
      const newData = [];
      result.forEach((studentData) => newData.push([studentData[0], studentData[3]]));
      const fields = new Set();
      newData.forEach((item) => fields.add(item[1]));
      const final = {};
      fields.forEach((fieldData) => { (final[fieldData] = 0); });
      newData.forEach((studentData) => { (final[studentData[1]] += 1); });
      console.log(`Number of students: ${result.filter((check) => check.length > 3).length}`);
      Object.keys(final).forEach((fieldData) => console.log(`Number of students in ${fieldData}: ${final[fieldData]}. List: ${newData.filter((n) => n[1] === fieldData).map((n) => n[0]).join(', ')}`));
      resolve(result, final, newData);
    });
  });
}

module.exports = countStudents;

module.exports = countStudents;
