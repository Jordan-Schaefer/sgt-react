import React from 'react';

function Header(props) {
  const title = props.text;
  return (
    <header className='title'>{title}</header>
  );
}

export default Header;
