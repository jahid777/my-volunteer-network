import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../Images/logos/Group 1329.png'
import './RegisterForm.css';

const RegisterForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
       <div>
            <div style={{textAlign:'center', marginTop: '20px'}}>
            <img style={{height:'100px'}} src={logo} alt=""/>
            </div>

            <div className="form-container">
                
                <form action="" className="form-box">
                <h2 style={{marginTop:'-30px'}}>Register as a Volunteer</h2>
                    <input type="text" name="name" value={loggedInUser.name} placeholder="Full Name" /> <br/>
                    <input type="text" name="email" value={loggedInUser.email} placeholder="UserName or Email"/>
                    <br/>
                    <input type="date" name="" require/>
                    <br/>
                    <input type="text" name="description"       placeholder="description" />
                    <br/>
                    <input type="text" name="origin" placeholder="origin"/>
                    <br/>
                   <Link to ="/home">
                   <input type="submit" value="Registration"/>
                   </Link>
                </form>
            </div>

       </div>
    );
};

export default RegisterForm;