import React from 'react';
import {STUDENTS} from './constants';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <div>
      {STUDENTS.map(student => (
        <div>
          <Link to={`/students/${student.id}`}>{student.name}</Link> (
          {student.score})
        </div>
      ))}
    </div>
  );
};
