import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import img from '../Images/img/birdHouse.png'

const EventCard = () => {
    const [events, setEvents] = useState([]); //server ar data
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
        // card akare server theke data ase show kora
        fetch('https://shielded-ocean-92089.herokuapp.com/eventsCard?email='+loggedInUser.email)
        // fetch('https://shielded-ocean-92089.herokuapp.com/eventsCard')
        .then(res => res.json())
        .then(data =>{
            setEvents(data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[events])

    //cancel korte
    const handleCancel = (id) =>{
        // console.log('deleted',id);
        fetch(`https://shielded-ocean-92089.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            // console.log('deleted successfully');
        })
    }
   
    return (
        <div>
            <Header></Header>

        
        {
           events.map((data,i )=> ( 
           <div key={i} class="card mb-3" style={{maxWidth: "540px", margin:'auto', marginTop:'35px',backgroundColor:'green'}}>
            <div class="row g-0">
                    <div class="col-md-4">
                    <img style={{height:'200px'}} src={img} alt="..."/>
                    </div>
                    <div class="col-md-8" style={{marginTop:'30px'}}>
                    <div class="card-body">
                        <h5 class="card-title">{data.date}</h5>
                        <p class="card-text">Event: {data.organization}</p>
                        <p>Description: {data.description}</p>
                         <p>Name: {loggedInUser.gmailName}</p>
                        <button className="btn btn-primary" 
                        onClick={()=>handleCancel(data._id)}>
                        Cancel</button>
                    </div>
                    </div>
              </div>
            </div>
                ))
        }



        </div>
    );
};

export default EventCard;