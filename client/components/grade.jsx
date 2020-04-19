import React from 'react';

function Grade(grade) {
  console.log(grade);
  return (
    <tr>
      {grade[0].grade}
    </tr>
  );
}

export default Grade;
