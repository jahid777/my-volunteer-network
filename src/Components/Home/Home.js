import React, { useEffect, useState } from 'react';
import CourseItem from '../CourseItem/CourseItem';
import FakeData from '../FakeData/FakeData';
import Header from '../Header/Header';

const Home = () => {
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        setCourse(FakeData)
    },[])
     console.log(course);
    return (
        
        <div>
            <Header></Header>
            <div className="row">
           {
               course.map(data=> <CourseItem singleCourse={data}></CourseItem> )
           }
        </div>
        </div>
    );
};

export default Home;