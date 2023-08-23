
import fs from 'fs';

const readDatabase = (path) => {
  const filePromise = new Promise((resolve, reject) => {
    fs.readFile(path, (err, returnData) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const data = returnData.toString().split('\n');

        const allStudents = data.filter((v, i) => i !== 0 && v.length !== 0);

        const csStudents = allStudents.filter((v) => v.toString().endsWith('CS')).map((v) => v.split(',')[0]);
        const sweStudents = allStudents.filter((v) => v.toString().endsWith('SWE')).map((v) => v.split(',')[0]);
        resolve({ CS: csStudents, SWE: sweStudents });
      }
    });
  });
  return filePromise;
};

export default readDatabase;
