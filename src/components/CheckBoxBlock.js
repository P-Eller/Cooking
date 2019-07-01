import React from 'react';
import CheckBox from './CheckBox';

const CheckBoxBlock = ({id, name, options}) => {
  return(
    <div>
      <h1>{name}</h1>
      {
          options.map((option, i) => {
            console.log("map options",option,i,name);
            return (<CheckBox key= {i} name={option} id={name+i}/>);
          })
      
      }
    </div>
  )

 }
  
  export default CheckBoxBlock;