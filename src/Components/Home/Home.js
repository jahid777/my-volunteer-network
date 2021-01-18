import React, { useContext, useEffect, useState } from 'react';
import CourseItem from '../CourseItem/CourseItem';
import FakeData from '../FakeData/FakeData';
import Header from '../Header/Header';
import randomColor from 'randomcolor';
import { Link } from 'react-router-dom';
import logo from '../Images/img/goodEducation.png';
import { UserCardData } from '../../App';
// console.log(randomColor);

const Home = () => {
    const [course, setCourse] = useState([]);


    //server ar data raksi jeta input tehke paysi
    const [uploadData, setUploadData] = useState([]);
    useEffect(()=>{
        setCourse(FakeData);
        //server theke uploaded data ansi
        fetch('http://localhost:7000/homeData')
        .then(res => res.json())
        .then(data =>{
           setUploadData(data)
        })
    },[])

   //context a click kora data ta raksi jate registreatoin input a read korte pari
    // const [cardData, setCardData] = useContext(UserCardData);
    // const handleSingUpload = (data) =>{
    //     const allData = {...data}
    //     setCardData(allData) //allDatar modde upload a click  kora datata ase specrfic data ta
    //   }
     

    return (
        
        <div>
            <Header></Header>
            <div className="row">
           {
               course.map(data=> <CourseItem singleCourse={data} key={data.name}
                color={randomColor()}
               ></CourseItem> )
           }

           {
               uploadData.map((upData,index) => (
                <Link key={index} to="/registerForm" className="link-design">
                <div> 
                  <div class="card" style={{width:'18rem', marginLeft:'45px', marginBottom:'20px', marginTop:'50px'}}>
                <img src={logo} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-text text-design link-design" style={{textAlign:'center',color:'black'}}>{upData.name}</h5>
                </div>
               </div>
             </div>
              </Link>
               ))
           }
            
        </div>
        </div>
    );
};

export default Home;