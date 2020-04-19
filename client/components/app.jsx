import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };

  }

  componentDidMount() {
    this.getGrades();
    console.log(this.state.grades);
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

  render() {
    return (
      <>
        <Header text='Student Grade Table'/>
        <table className='table thead-dark'>
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
      </>
    );
  }
}
