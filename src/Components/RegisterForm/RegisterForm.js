import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserCardData, UserContext } from '../../App';
import logo from '../Images/logos/Group 1329.png'
import './RegisterForm.css';


const RegisterForm = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedData , setSelectedData] = useState({});//akhane input ar description ar date joma hoccee ja stringify kore data base a joma hoccee...
    
    // console.log(selectedData);
    const [cardData, setCardData] = useContext(UserCardData);
    
    
   //database a send mani post korte 
    const handleSubmit = (e) =>{
        fetch('http://localhost:7000/addBooking',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(selectedData)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert('data submited')
            }
        //    history.push('/home') //form ta jate submit hoia registration component a chole jabe
        })
        e.preventDefault();
        alert('data submitted')
        history.push('/eventCard')//form ta jate submit hoia eventCard component a chole jabe
        
    }

    const handleChange = (e) => {
            const newUserInfo = { ...loggedInUser, ...selectedData };
            newUserInfo[e.target.name] = e.target.value;
            setSelectedData(newUserInfo);
    }
    


    return (
       <div>
            <div style={{textAlign:'center', marginTop: '20px'}}>
            <img style={{height:'100px'}} src={logo} alt=""/>
            </div>

            <div className="form-container">
                
                <form onSubmit={handleSubmit} action="" className="form-box">
                <h2 style={{marginTop:'-30px'}}>Register as a Volunteer</h2>
                    <input type="text" name="name" value={loggedInUser.gmailName} placeholder="Full Name" onChange={handleChange} required/> <br/>
                    <input type="text" name="email" value={loggedInUser.email} placeholder="UserName or Email" onChange={handleChange}/>
                    <br/>
                    <input type="date" name="date" onChange={handleChange} required/>
                    <br/>
                    <input type="text" name="description"       placeholder="description" onChange={handleChange}/>
                    <br/>

                    {/* <input type="text" name="organization" placeholder={cardData.name} onChange={handleChange} value={cardData.name}/>
                    <br/> */}


                    <input type="text" name="organization" placeholder={cardData.name} onChange={handleChange}/>
                    <br/>



                   
                   <input type="submit" value="Registration"/>
              
                </form>
            </div>
       </div>
    );
};

export default RegisterForm;