import React from 'react';
import style from './style.css'

/**
 * This function adds one to its input.
 */
function addOne(input: number): number {
  return input + 1;
}

const Button = (props) => (
  <div>
    {props.children}
  </div>
);

export default Button;
