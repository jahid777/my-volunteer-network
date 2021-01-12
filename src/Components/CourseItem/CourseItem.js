import React from 'react';
import { Link } from 'react-router-dom';
import '../CourseItem/CourseItem.css';
var randomColor = require('randomcolor');



const CourseItem = (props) => {
    const {name, pic} = props.singleCourse;
    console.log(pic);
    return (

     

<Link to = "/registerForm">
          <div class="card" style={{width:'18rem', marginLeft:'45px', marginBottom:'20px', marginTop:'50px'}}>
        <img src={require(`../Images/img/${pic}`).default} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-text text-design" style={{textAlign:'center'}}>{name}</h5>
        </div>
       </div>
       </Link>

     
    );
};

export default CourseItem;