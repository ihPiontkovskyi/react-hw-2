import {useEffect, useState} from 'react';
import * as APIService from '../../../services/APIService';

const StudentsList = ({children: render}) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const allStudents = APIService.getAllStudents();

    setStudents(allStudents);
  }, []);

  return render({students});
};

export default StudentsList;
