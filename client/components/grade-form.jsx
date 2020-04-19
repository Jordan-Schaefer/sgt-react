import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleCourse = this.handleCourse.bind(this);
    this.handleGrade = this.handleGrade.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCancle = this.onCancle.bind(this);
  }

  handleName(event) {
    this.setState(
      { name: event.target.value }
    );
  }

  handleCourse(event) {
    this.setState(
      { course: event.target.value }
    );
  }

  handleGrade(event) {
    this.setState(
      { grade: event.target.value }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  onCancle() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    }
    );
  }

  render() {
    return (
      <>
        <div>
          <form className='input-group mb-4 shadow-sm d-flex flex-column' onSubmit={this.handleSubmit}>
            <div className='d-flex justify-content-between'>
              <i className="fas fa-user"></i>
              <input required autoFocus type="text" placeholder='Name' value={this.state.name} onChange={this.handleName}/>
            </div>
            <div className='d-flex justify-content-between'>
              <i className="far fa-list-alt"></i>
              <input required autoFocus type="text" placeholder='Course' value={this.state.course} onChange={this.handleCourse} />
            </div>
            <div className='d-flex justify-content-between'>
              <i className="fas fa-graduation-cap"></i>
              <input required autoFocus type="text" placeholder='Grade' value={this.state.grade} onChange={this.handleGrade} />
            </div>
            <div className='d-flex justify-content-end'>
              <button type='submit' className='btn btn-success'>Submit</button>
              <button className='btn btn-danger' onClick={this.onCancle}>Cancle</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default GradeForm;
