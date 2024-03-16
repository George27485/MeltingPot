import React from 'react';
import spoonImage from '../assets/spoon.png'; 

const SubHeading = ({ title, centerImage, webTitle }) => (
  <div className="mb-4"> 
    <p className= {webTitle ? "text-2xl font-bold " : "text-xl font-semibold mb-2"}>{title}</p> 
    <img src={spoonImage} className={centerImage ? "mx-auto" : ""} /> 
  </div>
);

export default SubHeading;
