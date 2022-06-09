import React, { useState } from 'react';
import data from './components/data';
import './App.css';


function App() {
  const [Theme, setTheme] = useState('light');

  const handleChange = (e) => {
    setTheme(e.target.value)
  }

  return (
    <div className={Theme}>
      <div className="background extra">
        <h1 className="text">Testing!! Attention please!!</h1>

        <label className="text">Select Theme:</label>
        <select onChange={handleChange}>
          <option value="swiggy">Swiggy</option>
          <option value="zomato">Zomato</option>
        </select>

        <div className="flex">
          <p className="text">{data[Theme]?.content}</p>
        </div>

      </div>
    </div>
  );
}

export default App;
