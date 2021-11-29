import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings'
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
    <div className='right'><h1>IdCard</h1></div>
    
       <IdCard
        firstName="John"
        lastName="Doe"
        gender="Male"
        height={1.78 + 'm'}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        firstName="Delores"
        lastName="Obrien"
        gender="Female"
        height={1.72 + 'm'}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
 <div className='right'><h1>Greetings</h1></div>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="en">Chris</Greetings>
      <Greetings lang="es">David</Greetings>
      <div className='right'><h1>Random</h1></div>
      <Random min={1} max={10} />
      <Random min={100} max={1000} />
      <div className='right'><h1>BoxColor</h1></div>
      <BoxColor r={255} g={0} b={0} />
      <br />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
