import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {STUDENTS} from './constants';

export default ({match}) => {
  const studentId = match.params.studentId;

  const student = STUDENTS.find(s => s.id === Number(studentId));

  if (!student) {
    return <Redirect to="/not-found" />;
  }

  return (
    <div>
      <Link to="/students">
        <span role="img" aria-label="emoji">
          👈
        </span>{' '}
        Back to list
      </Link>
      <h3>
        {student.name} (ID: {student.id})
      </h3>
      <h4>Score: {student.score}</h4>
    </div>
  );
};
