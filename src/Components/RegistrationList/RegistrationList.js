import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../Images/logos/Group 1329.png';
import volunteerList from '../Images/logos/users-alt 1.png';
import addEvent from '../Images/logos/plus 1.png';
import { UserContext } from '../../App';
import remove from '../Images/logos/trash-2 9.png';

const Registration = () => {
    const [events, setEvents] = useState([]); //server ar data akhaen joma krsi
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch('http://localhost:7000/eventsCard?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data =>{
            setEvents(data)
        })
    },[events]) //state ar events add korsi jate delect click korle oita ui theke sore jay

    //remove korte
    const handleRemove = (id) =>{
        // console.log('deleted',id);
        fetch(`http://localhost:7000/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            // console.log('deleted successfully');
        })
    }

    return (
        <div className="row" style={{marginTop:'15px'}}>

            <div className="col-md-4">
                <img style={{height:'80px',marginLeft:'35px',marginBottom:'25px'}} src={logo} alt=""/> <br/>
                
                  <img style={{margin:'35px',marginTop:'35px',  height:'35px'}} src={volunteerList} alt=""/>
                 <span>Volunteer register list</span> <br/>

                 <img style={{margin:'35px',marginTop:'25px',  height:'35px'}} src={addEvent} alt=""/>
                 <span>Add event</span> 
            </div>

            <div className="col-md-8">
                <h3 style={{marginTop:'35px'}}>Volunteer register list</h3>
                <div style={{border: '25px solid lightGray', height:'700px', marginRight:'15px',borderRadius:'5px', overflow:'scroll'}}>

                   <div style={{marginTop:'20px',width:'758px',marginLeft:'30px',borderRadius:'10px',height:'50px'}}>
                     
                   <table class="table">
                   <thead style={{ backgroundColor:'lightGray'}}>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Registration Date</th>
                        <th scope="col">Event</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                      <tbody>
                      {
                          events.map((data,index) => (
                            <tr key={index}>
                            <th scope="row">{data.gmailName}</th>
                            <td>{data.email}</td>
                            <td>{data.date}</td>
                            <td>{data.description}</td>

                            <td><img style={{filter:'brightness(0)',height:'20px'}} onClick={()=>handleRemove(data._id)} src={remove} alt=""/> </td>
                         </tr>
                          ))
                      }
                      </tbody>
                    </table>


                   </div>
                </div>
            </div>
            
        </div>
    );
};

export default Registration;