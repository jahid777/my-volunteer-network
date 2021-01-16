import React, { useEffect, useState } from 'react';
import CourseItem from '../CourseItem/CourseItem';
import FakeData from '../FakeData/FakeData';
import Header from '../Header/Header';
import randomColor from 'randomcolor';
// console.log(randomColor);

const Home = () => {
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        setCourse(FakeData)
    },[])

    return (
        
        <div>
            <Header></Header>
            <div className="row">
           {
               course.map(data=> <CourseItem singleCourse={data} key={data.name}
                color={randomColor()}
               ></CourseItem> )
           }
        </div>
        </div>
    );
};

export default Home;