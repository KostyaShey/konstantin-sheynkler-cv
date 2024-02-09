import React, { useState } from 'react';
import './Button.css';  // import the css file  


export default function Button(props) {

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1)
    props.changeCounterCookie();
  };

  return (
    <button className="button" onClick={handleClick}>
      Clicked {counter} times
    </button>
  );
}
