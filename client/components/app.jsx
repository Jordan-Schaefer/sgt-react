import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.addGrade = this.addGrade.bind(this);
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

  addGrade(newGrade) {
    console.log(newGrade);
    // const grade =
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(res => res.json())
      .then(data => {
        const previousData = this.state.grades.slice();
        previousData.push(data);
        this.setState(
          { grades: previousData }
        );
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <Header text='Student Grade Table' average={this.averageGrade()}/>
        <div className='d-flex justify-content-around'>
          <table className='table table-striped'>
            <thead>
              <tr className='thead-dark'>
                <th>Student Name</th>
                <th>Course</th>
                <th>Grade</th>
              </tr>

            </thead>
            <tbody>
              <GradeTable grade={this.state.grades} />
            </tbody>
          </table>
          <GradeForm onSubmit={this.addGrade} />
        </div>

      </>
    );
  }
}
