import { useState } from 'react';
import './UseState.css';


const UseState = () => {
  //console.log(useState('light'));
  //set initial value of theme to 'light'
  const [theme, setTheme] = useState(['light']); 
  const [count, setCount] = useState(0);

  
  


  //then use theme as className to switch between css classes
  return (
    <div className={`${theme} state`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
      {/* single toggle function for both both and dark */}
      <button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>Toggle Background</button>
      
      <h1>{count}</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
    </div>
  );
};

export default UseState;