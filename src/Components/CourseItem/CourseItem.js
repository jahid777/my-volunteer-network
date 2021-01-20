import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserCardData, UserContext } from "../../App";
import "../CourseItem/CourseItem.css";
var randomColor = require("randomcolor");

const CourseItem = (props) => {
  const { pic, name } = props.singleCourse;

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [cardData, setCardData] = useContext(UserCardData);

  const handleSingleCard = (data) => {
    const allData = { ...data };
    setCardData(allData); //allDatar modde home page theke click kora card ase..
  };

  return (
    <Link to="/registerForm" className="link-design">
      <div onClick={() => handleSingleCard(props.singleCourse)}>
        <div
          class="card"
          style={{
            width: "18rem",
            marginLeft: "45px",
            marginBottom: "20px",
            marginTop: "50px",
          }}
        >
          <img
            src={require(`../Images/img/${pic}`).default}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5
              class="card-text text-design link-design"
              style={{
                textAlign: "center",
                backgroundColor: props.color,
                color: "black",
              }}
            >
              {name}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseItem;
