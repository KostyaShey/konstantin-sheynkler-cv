import React, { useState } from 'react';
import './Button.css';


export default function Button() {
  const [counter, setCounter] = useState(0);
  return (
    <button className="button" onClick={() => setCounter(counter + 1)}>
      Clicked {counter} times
    </button>
  );
}
