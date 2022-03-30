import { TodoItem } from './TodoItem';
import { Task } from './types';

type TodoListProps = {
  tasks: Task[];
  onToggleItem: (id: number) => void;
  deleteTask: (id: number) => void;
};
export const TodoList = ({
  tasks,
  onToggleItem,
  deleteTask,
}: TodoListProps) => {
  return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggleItem={() => onToggleItem(task.id)}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
      <li className="project-description">
        <p>This is your TODO List.</p>
      </li>
    </ul>
  );
};
