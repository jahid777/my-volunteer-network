import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import '../AddEventForm/AddEventForm.css';
import logo from '../Images/logos/cloud-upload-outline 1.png';

const AddEventForm = () => {
    const history= useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      // console.log(data)
      //server a creat korte daata from input
      fetch('http://localhost:7000/addData',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data =>{
        if(data){
          alert('DATA UPLOADED SUCCESSFULLY')
          history.push("/home")
        }
      })



    };
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
     <div className="main-form-box">
         <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

            <input   name="name" placeholder="enter event"  ref={register} required/>

            
            <input name="date" type="date"  ref={register} required/> <br/>

            <input style={{height:'100px'}} name="description" ref={register} placeholder="enter description"  required/>


            <input name="file" id="upload" type="file" ref={register} hidden accept="image/*"/> 
            <label for="upload" className="upload-design"> <img className="upload-img" src={logo} alt=""/> Choose file</label>
            <br/>

            {errors.exampleRequired && <span className="error">This field is required</span>}

            <input type="submit" />
            </form>
            
     </div>
    );
};

export default AddEventForm;