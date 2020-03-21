import React from 'react';
import './style.css';

function CardWrapper(props) {
  return <div className="table-wrapper">{props.children}</div>
}

export default CardWrapper;