import React from 'react';
import { useState } from 'react';
import Component1 from './components/Component1';
import Home from './components/Home';
import Title from './components/Title';
import Title1 from './components/Title1';
import Home3 from './components/Home3';
import Title3 from './components/Title3';
import Counter from './components/Counter';
import Home5 from './components/Home5';
import About from './components/About';

function App() {
  const getRandomDescription = () => {
    return Math.floor(Math.random() * 10);
  }

  const [isHome, setIsHome] = useState(true);
  const [description, setDescription] = useState(getRandomDescription());

 

  const handlePageChange = () => {
    setIsHome(!isHome);
    setDescription(getRandomDescription());
  }
  return (
    <div className="App">
      <Component1 />
      <Home/>
      <Title/>
      <Title1 name="props1" />
      <Title1 name="props2" />
      <Home3/>
      <Title3/>
      <Counter/>

      <div>
        <h1>Week l Day 5</h1>
      <button onClick={handlePageChange}>Change page</button>
      {isHome ? (
        <Home5 description={description} />
      ) : (
        <About description={description} />
      )}
    </div>
    </div>
  );
}

export default App;
