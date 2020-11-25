import React from 'react';
import Profile from './profile/Profile.js';
import moi from "./profile/moi.jpg";
import './App.css';

function App() {
const alerte = (fullName) => {alert (fullName)} ;
  return (
    <div>
     <Profile fullName="Yassine Seltene" bio="Je suis un développeur Web fullstack js" profession="ingénieur développeur web" handleName={alerte}/> 
      

</div>
  )
}
export default App;
