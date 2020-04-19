import React from 'react';
import Header from './header';
import Grade from './grade';

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

  render() {
    return (
      <>
        <Header text='Student Grade Table'/>
        <table className='grade-table'>
          <thead>
            <tr>
              <th className='grade-table'>Student Name</th>
              <th className='grade-table'>Course</th>
              <th className='grade-table'>Grade</th>
            </tr>

          </thead>
          <tbody>
            <Grade grade={this.state.grades}/>
          </tbody>
        </table>
      </>
    );
  }
}
