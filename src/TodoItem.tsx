import { Task } from './types';

type TodoItemProps = {
  task: Task;
  onToggleItem: (id: number) => void;
  deleteTask: (id: number) => void;
};
export const TodoItem = ({ task, onToggleItem, deleteTask }: TodoItemProps) => {
  return (
    <li className="task">
      <input
        type="checkbox"
        className="task__checkbox"
        checked={task.completed}
        onChange={(event) => onToggleItem(task.id)}
      />
      <p className="task__description">{task.title}</p>
      <button
        className="task__delete-btn"
        onClick={(event) => deleteTask(task.id)}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </li>
  );
};
