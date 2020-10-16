import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../store';

function Task(props) {
  const dispatch = useDispatch();

  const removeTaskFromList = value => {
    dispatch(removeTask(value));
  };

  return <li onClick={() => removeTaskFromList(props.value)}>{props.value}</li>;
}

export default Task;
