import { useReducer, useEffect } from 'react';
import { reducer, initState, initializer } from './reducer';
import './styles.css';
import { Task } from './types';
import { savedTasksKey } from './constants';
import { TodoList } from './TodoList';
import { Form } from './Form';

export default () => {
  const [state, dispatch] = useReducer(reducer, initState, initializer);

  useEffect(() => {
    localStorage.setItem(savedTasksKey, JSON.stringify(state));
  }, [state]);

  const getLargestId = (tasks: Task[]) => {
    let result = 0;
    for (const task of tasks) {
      result = Math.max(task.id, result);
    }
    return result;
  };

  return (
    <>
      <Form
        input={state.input}
        addTask={(event) => {
          event.preventDefault();
          dispatch({
            type: 'ADD_TASK',
            payload: {
              task: {
                id: getLargestId(state.tasks) + 1,
                title: state.input,
                completed: false,
              },
            },
          });
          dispatch({ type: 'UPDATE_INPUT', payload: { input: '' } });
        }}
        updateInput={(event) =>
          dispatch({
            type: 'UPDATE_INPUT',
            payload: { input: event.target.value },
          })
        }
      />

      <TodoList
        tasks={state.tasks}
        onToggleItem={(id: number) => {
          dispatch({ type: 'TOGGLE_TASK', payload: { id } });
        }}
        deleteTask={(id: number) => {
          dispatch({ type: 'DELETE_TASK', payload: { id } });
        }}
      />
    </>
  );
};
