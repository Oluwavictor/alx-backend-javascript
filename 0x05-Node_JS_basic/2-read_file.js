const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');

    const studentsData = lines.slice(1).map(line => line.split(','));

    const validStudentsData = studentsData.filter(student => student.length > 3);

    const fieldCounts = {};
    const fieldsSet = new Set();

    const fieldIndexMap = {
      name: 0,
      field: 3
    };

    validStudentsData.forEach(student => {
      const field = student[fieldIndexMap.field];
      fieldsSet.add(field);
      fieldCounts[field] = (fieldCounts[field] || 0) + 1;
    });

    console.log(`Number of students: ${validStudentsData.length}`);

    fieldsSet.forEach(field => {
      const studentsInField = validStudentsData
        .filter(student => student[fieldIndexMap.field] === field)
        .map(student => student[fieldIndexMap.name])
        .join(', ');

      console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${studentsInField}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;