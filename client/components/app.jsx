import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.addGrade = this.addGrade.bind(this);
    this.removeGrade = this.removeGrade.bind(this);
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
    let total = 0;
    for (let i = 0; i < students.length; i++) {
      total += parseInt(students[i].grade);
    }
    const average = (total / (students.length));
    return Math.round(average).toString();
  }

  addGrade(newGrade) {
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

  removeGrade(grade) {
    const updatedGrades = this.state.grades.slice();
    for (let i = 0; i < updatedGrades.length; i++) {
      if (updatedGrades[i].id === grade) {
        updatedGrades.splice(i, 1);
      }
    }
    fetch(`/api/grades/${grade}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: grade })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ grades: updatedGrades });
      });
  }

  render() {
    return (
      <>
        <Header text='Student Grade Table' average={this.averageGrade()}/>
        <div className='d-flex justify-content-around media'>
          <table className='table table-striped'>
            <thead>
              <tr className='thead-dark'>
                <th>Student Name</th>
                <th>Course</th>
                <th>Grade</th>
                <th>Opperation</th>
              </tr>

            </thead>
            <tbody>
              <GradeTable grade={this.state.grades} remove={this.removeGrade}/>
            </tbody>
          </table>
          <GradeForm onSubmit={this.addGrade} />
        </div>

      </>
    );
  }
}
