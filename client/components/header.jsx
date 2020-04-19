import React from 'react';

function Header(props) {
  const title = props.text;
  return (
    <div className='d-flex justify-content-between'>
      <header className='title'>{title}</header>
      <div>
        <h1>Average Grade <span className="badge badge-secondary">{props.average}</span></h1>
      </div>
    </div>
  );
}

export default Header;
