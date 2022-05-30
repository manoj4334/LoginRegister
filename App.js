import * as React from 'react';
import './style.css';
import debounce from 'lodash.debounce';
import Table from './Table';
import TodoInput from './TodoInput';
import { Pagination } from './Pagination';

export default function App() {
  const [todoItems, setTodoItems] = React.useState([]);
  const [updateTodo, setUpdateTodo] = React.useState({});
  const [search, setSearch] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(3);

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = todoItems.slice(firstPost, lastPost);
  const totalPosts = todoItems.length;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (number) => setCurrentPage(number);

  const ascendingOrder = () => {
    const ascendingList = todoItems.sort((a, b) => (a.name > b.name ? 1 : -1));
    setTodoItems([...ascendingList]);
  };

  const decendingOrder = () => {
    const decendingList = todoItems.sort((a, b) => (a.name < b.name ? 1 : -1));
    setTodoItems([...decendingList]);
  };

  const create = (name) => {
    const newTodoItems = [...todoItems, { name, id: todoItems.length + 1 }];
    setTodoItems(newTodoItems);
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const updateTodoList = (value) => {
    let updatedTodo = [...todoItems];
    updatedTodo.splice(value.id - 1, 1);
    updatedTodo.push(value);
    updatedTodo.sort((a, b) => a.id - b.id);
    setTodoItems(updatedTodo);
    setUpdateTodo({});
  };

  const editTodos = (index) => {
    setUpdateTodo(todoItems[index]);
  };

  const handle = debounce((e) => {
    setSearch(e.target.value);
    let filteredArr = todoItems.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setTodoItems(filteredArr);
  }, 300);

  return (
    <div>
      <TodoInput
        created={create}
        updateTodoList={updateTodoList}
        updateTodo={updateTodo}
      />
      <input type="search" placeholder="search..." onChange={handle} />

      <select onChange={(e) => setPostsPerPage(e.target.value)}>
        <option hidden>Select</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <Table
        currentPosts={currentPosts}
        decendingOrder={decendingOrder}
        ascendingOrder={ascendingOrder}
        deleteTodoItem={deleteTodoItem}
        editTodos={editTodos}
      />
      <Pagination pageNumbers={pageNumbers} paginate={paginate} />
    </div>
  );
}
