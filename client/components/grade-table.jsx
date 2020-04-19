import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  return (
    props.grade.map(list => {
      return <Grade
        item={list}
        key={list.id}
        name={list.name}
        course={list.course}
        grade={list.grade}
        remove={props.remove}
      />;
    })
  );
}

export default GradeTable;
