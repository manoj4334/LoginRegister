import * as React from 'react';

const Todotext = ({ data }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      {data.name}
    </div>
  );
};
export default Todotext;
