import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name);

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);

  }

  render() {
    return (
      <>
        <form className='input-group mb-4 shadow-sm' onSubmit={this.handleSubmit}>
          <i className="fas fa-user"></i>
          <input required autoFocus type="text" placeholder='Name' value={name} onChange={this.handleChange}/>
          <i className="far fa-list-alt"></i>
          <input required autoFocus type="text" placeholder='Course' value={name} onChange={this.handleChange} />
          <i className="fas fa-graduation-cap"></i>
          <input required autoFocus type="text" placeholder='Grade' value={name} onChange={this.handleChange} />
        </form>
        <button type='submit' className='btn btn-success'>Submit</button>
        <button className='btn btn-danger'>Cancle</button>
      </>
    );
  }
}

export default GradeForm;
