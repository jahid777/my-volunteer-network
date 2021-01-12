import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../Images/logos/Group 1329.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
            <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"> <img style={{height: '50px'}} src={logo} alt=""/> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home" style={{fontSize:'20px'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/donation" className="nav-link active" aria-current="page" style={{fontSize:'20px'}}>Donation</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/event" style={{fontSize:'20px'}}>Event</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/blog" style={{fontSize:'20px'}}>Blog</Link>
        </li>
        <li className="nav-item">
         {loggedInUser.name ? <h3 style={{fontSize:'20px', marginTop:'11px', color:'blue' }}>{loggedInUser.name}</h3> : <Link className="nav-link active" aria-current="page" to="/login" style={{fontSize:'20px'}}><button className="bg-primary" style={{color:'white',borderRadius:'5px',border:'none',height:'40px'}}>Register</button></Link>}
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/admin" style={{fontSize:'20px'}}><button className="bg-secondary" style={{color:'white',borderRadius:'5px',border:'none',height:'40px'}}>Admin</button></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
     <div style={{textAlign:'center', marginTop: '150px'}}>
        <h2>I GROW BY HELPING PEOPLE NEED.</h2>

      <form style={{marginTop:'30px'}}>
         <input style={{borderBottom:'none'}} className="search-box"
         type="text" name="text" placeholder="search" id=""/>
         <button className="search-button btn btn-primary">Search</button>
      </form>
      </div>
  </div>
   
   

    
  

    );
};

export default Header;