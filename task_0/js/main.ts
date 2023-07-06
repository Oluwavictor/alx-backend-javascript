export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentA: Student = {
  firstName: "Adeyinka",
  lastName: "Bamgbade",
  age: 30,
  location: "Lagos, Nigeria",
};
const studentB: Student = {
  firstName: "Grace",
  lastName: "Ajibola",
  age: 22,
  location: "Lagos, Nigeria",
};

const studentsList: Student[] = [studentA, studentB,
];
const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    margin: 10%;
    height: 80%;
  }

  table {
    border-collapse: collapse;
  }

  thead {
    font-weight: bold;
  }

  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }

  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;

/**
 * Displays student information.
 * @param students The list of students to display.
 * @author Bamgbade Adeyinka <https://github.com/Oluwavictor>
 */
export const displayStudents = (students: Student[]): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');
  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
  tableHead.insertAdjacentElement('beforeend', headRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement('beforeend', bodyRow);
  }

  table.insertAdjacentElement('beforeend', tableHead);
  table.insertAdjacentElement('beforeend', tableBody);
  document.body.insertAdjacentElement('beforeend', table);
};

displayStudents(studentsList);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
