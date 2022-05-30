import * as React from 'react';

const TodoInput = ({ created, updateTodo, updateTodoList }) => {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    if (updateTodo.name) {
      setValue(updateTodo.name);
    }
  }, [updateTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === 'Add') {
      setValue('');
      if (value) {
        created(value);
      } else {
        alert('Enter Name... ');
        return;
      }
    } else {
      const updatedTodo = {
        name: value,
        id: updateTodo.id ,
      };
      updateTodoList(updatedTodo);
      setValue('');
    }
  };
  return (
    <div>
      
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="button"
          onClick={(e) => handleSubmit(e)}
          value={updateTodo.name ? 'update' : 'Add'}
        />
      </form>
    </div>
  );
};
export default TodoInput;
