import uuid from 'uuid/v1';

let students = [
  {
    id: '5ddac0be49c3b1968b8c98c8',
      avatar: 'https://api.adorable.io/avatars/285/Slater',
    name: 'Callie Andrews',
    address: '823 Brightwater Court, Springhill, Utah, 8664',
  },
  {
    id: '5ddac0be8e1d6d2b156775a0',
    avatar: 'https://api.adorable.io/avatars/285/Owens',
    name: 'Kaitlin French',
    address: '806 Debevoise Avenue, Lowell, Hawaii, 4221',
  },
  {
    id: '5ddac0bef3993288366b217c',
    avatar: 'https://api.adorable.io/avatars/285/Hobbs',
    name: 'Clay Barber',
    address: '767 Baltic Street, Klagetoh, Illinois, 2988',
  },
  {
    id: '5ddac0be7ec6623e9fe60672',
    avatar: 'https://api.adorable.io/avatars/285/Ramos',
    name: 'Whitehead Trevino',
    address: '589 McClancy Place, Venice, Iowa, 318',
  },
  {
    id: '5ddac0be30ff8c2bff467893',
    avatar: 'https://api.adorable.io/avatars/285/Kirkland',
    name: 'Mccarty Wall',
    address: '748 Mill Street, Blanco, Northern Mariana Islands, 8829',
  },
  {
    id: '5ddac0be789ce6108c55e437',
    avatar: 'https://api.adorable.io/avatars/285/Oneill',
    name: 'Coffey Whitney',
    address: '364 School Lane, Finderne, North Carolina, 9282',
  },
  {
    id: '5ddac0bead305e253f377670',
    avatar: 'https://api.adorable.io/avatars/285/Brown',
    name: 'Bartlett Armstrong',
    address: '985 Dobbin Street, Wakarusa, Vermont, 2665',
  },
];

export const getAllStudents = () => {
  return students;
};

export const getStudent = studentId => {
  const student = students.find(s => s.id === studentId);
  return student;
};

export const addStudent = student => {
  const extendedStudent = {
    ...student,
    id: uuid(),
  };

  students.push(extendedStudent);

  return extendedStudent;
};
export const checkStudentId = studentId => {
  const student = students.find(s => s.id === studentId);
  return !!student;
};
export const updateStudent = (studentId, updatedStudent) => {
  const studentIndex = students.findIndex(s => s.id === studentId);

  if (studentIndex !== -1) {
    students[studentIndex] = updatedStudent;
  }

  return updatedStudent;
};

export const deleteStudent = studentId => {
  const studentIndex = students.findIndex(s => s.id === studentId);

  if (studentIndex !== -1) {
    const [deletedStudent] = students.splice(studentIndex, 1);

    return deletedStudent;
  }

  return null;
};
