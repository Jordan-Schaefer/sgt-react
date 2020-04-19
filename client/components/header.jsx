import React from 'react';

function Header(props) {
  const title = props.text;
  return (
    <div className='container'>
      <header className='title'>{title}</header>
    </div>

  );
}

export default Header;
