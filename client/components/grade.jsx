import React from 'react';

function Grade(props) {
  const gradeId = props.item.id;
  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.course}</td>
        <td>{props.grade}</td>
        <td><button onClick={() => props.remove(gradeId)} className='btn btn-danger'>Delete</button></td>
      </tr>
    </>
  );
}

export default Grade;
