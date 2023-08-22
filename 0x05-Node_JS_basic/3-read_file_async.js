const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');

      const students = lines.slice(1).map(line => line.split(','));

      const fieldCounts = {};
      const fields = new Set();

      const FIELD_INDEX = 3;
      const NAME_INDEX = 0;

      students.forEach(student => {
        if (student.length > FIELD_INDEX) {
          const field = student[FIELD_INDEX];
          const name = student[NAME_INDEX];

          fields.add(field);
          fieldCounts[field] = (fieldCounts[field] || 0) + 1;
        }
      });

      const output = [`Number of students: ${students.length - 1}`];
      fields.forEach(field => {
        const studentsInField = students
          .filter(student => student[FIELD_INDEX] === field)
          .map(student => student[NAME_INDEX])
          .join(', ');

        output.push(`Number of students in ${field}: ${fieldCounts[field]}. List: ${studentsInField}`);
      });

      resolve(output.join('\n'));
    });
  });
}

module.exports = countStudents;