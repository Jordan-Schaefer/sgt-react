import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };

  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState(
          { grades: grades }
        );
      })
      .catch(err => console.error(err));
  }

  averageGrade() {
    const students = this.state.grades;
    let average = null;
    for (let i = 0; i < students.length; i++) {
      average += students[i].grade;
    }
    average = average / students.length;
    return Math.round(average).toString();
  }

  postNewGrade(newGrade) {
    const post = {
      method: 'POST',
      headers: {
        'Constent-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    };
    fetch('/api/grades', post);
  }

  render() {
    return (
      <>
        <Header text='Student Grade Table' average={this.averageGrade()}/>
        <table className='table table-striped'>
          <thead>
            <tr className='thead-dark'>
              <th>Student Name</th>
              <th>Course</th>
              <th>Grade</th>
            </tr>

          </thead>
          <tbody>
            <GradeTable grade={this.state.grades}/>
          </tbody>
        </table>
        <GradeForm />
      </>
    );
  }
}
