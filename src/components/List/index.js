import React from 'react';
import { useSelector } from 'react-redux';
import Task from '../Task';

function List() {
  const tasks = useSelector(state => state.tasks);
  return (
    <ul>
      {tasks?.map((value, key) => {
        return <Task key={key} value={value} />;
      })}
    </ul>
  );
}

export default List;
