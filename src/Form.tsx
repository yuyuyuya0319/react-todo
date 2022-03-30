import { FormEvent } from 'react';

type FormProps = {
  input: string;
  addTask: (event: FormEvent<HTMLFormElement>) => void;
  updateInput: (event: FormEvent<HTMLInputElement>) => void;
};
export const Form = ({ input, addTask, updateInput }: FormProps) => {
  return (
    <form className="add-task" onSubmit={addTask}>
      <input
        type="text"
        className="add-task__input"
        placeholder="feed the cat"
        value={input}
        onChange={updateInput}
      />
      <button className="add-task__button">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};
