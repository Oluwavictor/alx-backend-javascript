import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const databasePath = process.argv[2];
    readDatabase(databasePath).then((res) => {
      response.statusCode = 200;
      const title = 'This is the list of our students\n';
      const cs = `Number of students in CS: ${res.CS.length}. List: ${res.CS.join(', ')}\n`;
      const swe = `Number of students in SWE: ${res.SWE.length}. List: ${res.SWE.join(', ')}`;
      const resMsg = title + cs + swe;
      response.end(resMsg);
    }).catch(() => {
      response.statusCode = 500;
      response.end('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    if (request.params.major === 'CS') {
      const databasePath = process.argv[2];
      readDatabase(databasePath).then((res) => {
        response.statusCode = 200;
        const resMsg = `List: ${res.CS.join(', ')}`;
        response.end(resMsg);
      }).catch(() => {
        response.statusCode = 500;
        response.end('Cannot load the database');
      });
    } else if (request.params.major === 'SWE') {
      const databasePath = process.argv[2];
      readDatabase(databasePath).then((res) => {
        response.statusCode = 200;
        const resMsg = `List: ${res.SWE.join(', ')}`;
        response.end(resMsg);
      }).catch(() => {
        response.statusCode = 500;
        response.end('Cannot load the database');
      });
    } else {
      response.statusCode = 500;
      response.end('Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;
