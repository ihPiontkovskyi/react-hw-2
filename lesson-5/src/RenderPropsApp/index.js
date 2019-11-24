import React, {useState} from 'react';
import StudentsManager from './StudentsManager';
import './index.css';

const STUDENTS = [
  {
    name: 'Digna Bouchard',
    score: 55,
  },
  {
    name: 'Erlene Jarrells',
    score: 87,
  },
  {
    name: 'Temple Barna',
    score: 12,
  },
  {
    name: 'Dann Myers',
    score: 43,
  },
  {
    name: 'Grisel Edinger',
    score: 90,
  },
  {
    name: 'Portia Walborn',
    score: 100,
  },
  {
    name: 'Debora Stalling',
    score: 102,
  },
  {
    name: 'Eileen Donlin',
    score: 24,
  },
  {
    name: 'Gonzalo Calixte',
    score: 71,
  },
  {
    name: 'Christen Huffstutle',
    score: 59,
  },
];

const RenderPropsApp = () => {
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('asc');

  const toggleOrder = () => {
    const nextOrder = order === 'asc' ? 'desc' : 'asc';

    setOrder(nextOrder);
  };

  return (
    <div>
      <h3># search</h3>
      <input
        className="rpa-input"
        type="text"
        value={search}
        onChange={event => setSearch(event.target.value)}
        placeholder="Enter name..."
      />

      <h3 onClick={toggleOrder}>
        Order: {order} {order === 'asc' ? '⬇️' : '🔼'}
      </h3>

      <h3>Students</h3>

      <StudentsManager
        items={STUDENTS}
        sortBy="score"
        order={order}
        search={search}
        searchField="name"
      >
        {students =>
          students.length ? (
            <ul>
              {students.map(student => (
                <li key={student.name}>
                  {student.name} ({student.score})
                </li>
              ))}
            </ul>
          ) : (
            <h5>No results</h5>
          )
        }
      </StudentsManager>
    </div>
  );
};

export default RenderPropsApp;
