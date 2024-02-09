import logo from './logo.svg';
import './App.css';
import Cookies from 'js-cookie';
// import the button component
import Button from './components/Button/Button';
import { useState, useEffect } from 'react';


function App() {

  const [totalCounter, setTotalCounter] = useState(0);

  useEffect(() => {
    const clickCount = Cookies.get('clickCount');
    if (clickCount) {
      setTotalCounter(parseInt(clickCount));
    } else {
      Cookies.set('clickCount', 0);
    }
  }, []); // Empty array means this effect runs once on mount

  const changeCounterCookie = () => {
    const newCount = totalCounter + 1;
    setTotalCounter(newCount);
    Cookies.set('clickCount', newCount);
  };

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Hello! <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button changeCounterCookie={changeCounterCookie}/>
        {totalCounter && (
          <div>
            <p>Total clicks: {totalCounter}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
