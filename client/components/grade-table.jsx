import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  return (
    props.grade.map(list => {
      return <Grade
        key={list.id}
        name={list.name}
        course={list.course}
        grade={list.grade}
      />;
    })
  );
}

export default GradeTable;
