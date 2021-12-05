import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings'
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import LikeButton from './components/LikeButton'
import ClickablePicture from './components/ClickablePicture';
import Rating from './components/Rating';


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
      <div className='right'><h1>CreditCard</h1></div>

        <CreditCard 
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />
        <CreditCard 
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />
        <CreditCard 
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />
  <div className='right'><h1>Rating</h1></div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
<div className='right'><h1>Like Buttons</h1></div>
<LikeButton /> <LikeButton />
<div className='right'><h1>ClickablePicture</h1></div>
<ClickablePicture
  img='./assets/images/maxence.png'
  imgClicked='./assets/images/maxence-glasses.png'
/>

    </div>
    

  );
}

export default App;
