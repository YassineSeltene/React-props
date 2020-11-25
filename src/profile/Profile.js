import React from 'react';
import PropTypes from "prop-types";



  function Profile (props) {
    const {fullName, bio, profession, children, handleName, age="36"} = props;
    const lestyle ={textAlign: "center"};
  
    return (       
        <div>
          <h2 style={{color:'blue'}}> My fullname is : {fullName} </h2>
          <h2 style={lestyle}> Bio : {bio} </h2>
          <h2> My profession is : {profession} </h2>
          <h2> Mon age est : {age} ans</h2>
          <p>  {children} </p>
         <p><button onClick={()=>handleName(fullName)}> click me </button> </p>
        </div>
    )
  }
  Profile.propTypes = {
    age: PropTypes.number
  }
export default Profile;