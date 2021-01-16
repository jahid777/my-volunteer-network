import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import googleIcon from '../Images/logos/google.png';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../Images/logos/Group 1329.png'
import { UserContext } from '../../App';




if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }





const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSign = () =>{
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
     
        const {displayName, email} = result.user;
        const signedInUser = {gmailName: displayName, email}
        setLoggedInUser(signedInUser);
        history.replace(from);
         
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        
      });
    
    }
    return (
        <div>
             <div style={{textAlign:'center'}}><img style={{height:'100px'}} src={logo} alt=""/></div>
             <div className="box-design" style={{textAlign: 'center'}}>
              <h2 style={{paddingTop:'80px'}}>Login With</h2>
                <div onClick={handleGoogleSign}     className="google-sign-btn">
                <div className="google-div">
                <img className="google-icon" src={googleIcon} alt=""/>
                </div>
                <div className="text-div">
                <span className="google-text">Continue With Google</span>
                </div>
                </div>

                <p style={{marginTop:'30px', fontSize:'15px'}}>Don't have an account? <Link to="/">Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;