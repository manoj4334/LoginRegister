import * as React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TodoItem from './TodoItem';

export default function Table({
  currentPosts,
  decendingOrder,
  ascendingOrder,
  deleteTodoItem,
  editTodos,
}) {
  return (
    <table style={{ textAlign: 'center', marginTop: '10px' }}>
      <tr>
        <th> Id </th>
        <th>
          Task
          <ArrowUpwardIcon onClick={decendingOrder} />
          <ArrowDownwardIcon onClick={ascendingOrder} />
        </th>
        <th> Action </th>
      </tr>

      {currentPosts.map((data, index) => (
        <tr>
          <td>{data.id}</td>
          <td>
            <TodoItem item={data} />
          </td>
          <td>
            <button key={index} onClick={() => editTodos(index)}>
              Edit
            </button>
            <button onClick={() => deleteTodoItem(index)}>Delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
}
