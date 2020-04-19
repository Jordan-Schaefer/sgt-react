import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newGrade: [] };
  }

  render() {
    return (
      <>
        <form action="">
          <i className="fas fa-user"></i>
          <input type="text" placeholder='Name' />
          <i className="far fa-list-alt"></i>
          <input type="text" placeholder='Course' />
          <i className="fas fa-graduation-cap"></i>
          <input type="text" placeholder='Grade' />
        </form>
        <button className='btn btn-success'>Submit</button>
        <button className='btn btn-danger'>Cancle</button>
      </>
    );
  }
}

export default GradeForm;
