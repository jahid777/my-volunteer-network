import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import logo from '../Images/logos/Group 1329.png';
import volunteerList from '../Images/logos/users-alt 1.png';
import addEvent from '../Images/logos/plus 1.png';
import { UserContext } from '../../App';
import remove from '../Images/logos/trash-2 9.png';
import AddEventForm from '../AddEventForm/AddEventForm';

const Registration = () => {
    const [events, setEvents] = useState([]); //server ar data akhaen joma krsi

    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    useEffect(()=>{
        // fetch('https://shielded-ocean-92089.herokuapp.com/eventsCard')
        fetch('https://shielded-ocean-92089.herokuapp.com/registrationList')
        .then(res => res.json())
        .then(data =>{
            setEvents(data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[events]) //state ar events add korsi jate delect click korle oita ui theke sore jay

    //remove korte
    const handleRemove = (id) =>{
        // console.log('deleted',id);
        fetch(`https://shielded-ocean-92089.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            // console.log('deleted successfully');
        })
    }

    //add eventar kaj akhne
    const [activeRegList, setActiveRegList] = useState(true);
    const [activeEventForm, setActiveEventForm] = useState(false);

    let activeStyle = {
        color: "#207FEE", 
        fontWeight: '600',
        }


        const handleRegList = ()=> {
            setActiveRegList(true)
            setActiveEventForm(false)
        }
    
        const handleEventForm = () => {
            setActiveRegList(false)
            setActiveEventForm(true)
        }
    

    return (
        <div className="row" style={{marginTop:'15px'}}>

            <div className="col-md-4">
                <img style={{height:'80px',marginLeft:'35px',marginBottom:'25px'}} src={logo} alt=""/> <br/>


                <div style={activeRegList?activeStyle:{cursor: "pointer"}} onClick={(e)=>handleRegList(e)}>
                <img style={{margin:'35px',marginTop:'35px',  height:'35px'}} src={volunteerList} alt=""/>
                 <span>Volunteer Register List</span>
                </div> <br/>


                 <div style={activeEventForm?activeStyle:{cursor:"pointer"}} onClick={(e)=>handleEventForm(e)}>
                 <img style={{margin:'35px',marginTop:'25px',  height:'35px'}} src={addEvent} alt=""/>
                 <span>Add event</span> 
                 </div>
            </div>




            <div className="col-md-8">



                {/* table ar jonno */}
                <h3 style={{marginTop:'35px'}}>{activeRegList?"Volunteer register list": "Event"}</h3>
                <div style={{border: '25px solid lightGray', height:'700px', marginRight:'15px',borderRadius:'5px', overflow:'scroll',
                 display: activeRegList? "block": "none"
            }}>

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
                            <td>{data.organization}</td>

                            <td><img style={{filter:'brightness(0)',height:'20px'}} onClick={()=>handleRemove(data._id)} src={remove} alt=""/> </td>
                         </tr>
                          ))
                      }
                      </tbody>
                    </table>
                   </div>
                </div>


              {/* addEvent ar jonno           */}
             <div style={{  display: activeEventForm? "block": "none"}}>
                 <AddEventForm></AddEventForm>
             </div>


            </div>
            




        </div>
    );
};

export default Registration;














// import React, { useContext, useEffect, useState } from 'react'
// import { Link, useHistory } from 'react-router-dom';
// import logo from '../Images/logos/Group 1329.png';
// import volunteerList from '../Images/logos/users-alt 1.png';
// import addEvent from '../Images/logos/plus 1.png';
// import { UserContext } from '../../App';
// import remove from '../Images/logos/trash-2 9.png';
// import AddEventForm from '../AddEventForm/AddEventForm';

// const Registration = () => {
//     const [events, setEvents] = useState([]); //server ar data akhaen joma krsi
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
//     useEffect(()=>{
//         fetch('http://localhost:7000/eventsCard?email='+loggedInUser.email)
//         .then(res => res.json())
//         .then(data =>{
//             setEvents(data)
//         })
//     },[events]) //state ar events add korsi jate delect click korle oita ui theke sore jay

//     //remove korte
//     const handleRemove = (id) =>{
//         // console.log('deleted',id);
//         fetch(`http://localhost:7000/delete/${id}`,{
//             method: 'DELETE'
//         })
//         .then(res => res.json())
//         .then(result =>{
//             // console.log('deleted successfully');
//         })
//     }

//     //add eventar kaj akhne
//     const [activeRegList, setActiveRegList] = useState(true);
//     const [activeEventForm, setActiveEventForm] = useState(false);

//     let activeStyle = {
//         color: "#207FEE", 
//         fontWeight: '600',
//         }


//         const handleRegList = ()=> {
//             setActiveRegList(true)
//             setActiveEventForm(false)
//         }
    
//         const handleEventForm = () => {
//             setActiveRegList(false)
//             setActiveEventForm(true)
//         }
    

//     return (
//         <div className="row" style={{marginTop:'15px'}}>

//             <div className="col-md-4">
//                 <img style={{height:'80px',marginLeft:'35px',marginBottom:'25px'}} src={logo} alt=""/> <br/>


//                 <img style={{margin:'35px',marginTop:'35px',  height:'35px'}} src={volunteerList} alt=""/>
//                  <span>{activeRegList}</span> <br/>


//                  <img style={{margin:'35px',marginTop:'25px',  height:'35px'}} src={addEvent} alt=""/>
//                  <span>Add event</span> 
//             </div>




//             <div className="col-md-8">



//                 {/* table ar jonno */}
//                 <h3 style={{marginTop:'35px'}}>Volunteer register list</h3>
//                 <div style={{border: '25px solid lightGray', height:'700px', marginRight:'15px',borderRadius:'5px', overflow:'scroll'}}>

//                    <div style={{marginTop:'20px',width:'758px',marginLeft:'30px',borderRadius:'10px',height:'50px'}}>
                     
//                    <table class="table">
//                    <thead style={{ backgroundColor:'lightGray'}}>
//                         <tr>
//                         <th scope="col">Name</th>
//                         <th scope="col">Email Id</th>
//                         <th scope="col">Registration Date</th>
//                         <th scope="col">Event</th>
//                         <th scope="col">Action</th>
//                         </tr>
//                     </thead>
//                       <tbody>
//                       {
//                           events.map((data,index) => (
//                             <tr key={index}>
//                             <th scope="row">{data.gmailName}</th>
//                             <td>{data.email}</td>
//                             <td>{data.date}</td>
//                             <td>{data.description}</td>

//                             <td><img style={{filter:'brightness(0)',height:'20px'}} onClick={()=>handleRemove(data._id)} src={remove} alt=""/> </td>
//                          </tr>
//                           ))
//                       }
//                       </tbody>
//                     </table>
//                    </div>
//                 </div>


//               {/* addEvent ar jonno           */}
//              <div>
//                  <AddEventForm></AddEventForm>
//              </div>


//             </div>
            




//         </div>
//     );
// };

// export default Registration;