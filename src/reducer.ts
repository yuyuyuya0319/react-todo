import { Task } from './types';
import { savedTasksKey } from './constants';

type State = {
  input: string;
  tasks: Task[];
};

type Action =
  | UpdateInputAction
  | AddTaskAction
  | DeleteTaskAction
  | ToggleTaskAction;

type UpdateInputAction = {
  type: 'UPDATE_INPUT';
  payload: {
    input: string;
  };
};

type AddTaskAction = {
  type: 'ADD_TASK';
  payload: {
    task: Task;
  };
};

type DeleteTaskAction = {
  type: 'DELETE_TASK';
  payload: {
    id: number;
  };
};

type ToggleTaskAction = {
  type: 'TOGGLE_TASK';
  payload: {
    id: number;
  };
};

export const initState: State = {
  input: '',
  tasks: [{ id: 1, title: 'Dummy Item', completed: false }],
};

export const initializer = (initialValue = initState) => {
  const data = localStorage.getItem(savedTasksKey);
  return data ? JSON.parse(data) : initialValue;
};

export const reducer = (state: State, action: Action) => {
  console.log(action.type);
  switch (action.type) {
    case 'UPDATE_INPUT':
      return { ...state, input: action.payload.input };

    case 'ADD_TASK':
      const tasks = [action.payload.task, ...state.tasks];
      return { ...state, tasks: tasks };

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };

    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            task.completed = !task.completed;
          }
          return task;
        }),
      };

    default:
      throw new Error(`Invalid action: ${action.type}`);
  }
};
