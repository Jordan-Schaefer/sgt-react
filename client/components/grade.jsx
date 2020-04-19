import React from 'react';

function Grade(props) {
  console.log(props);
  const one = props.grade;
  console.log(one);
  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.course}</td>
        <td>{props.grade}</td>
      </tr>
    </>

  );
}

export default Grade;
