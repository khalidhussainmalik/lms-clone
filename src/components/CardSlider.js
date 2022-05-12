import React, { useRef, useState, useEffect} from "react";
// import dummyarrr from "../dummyData/dummy";
import "./CardSlider.css";
import { BsCalendar2EventFill } from "react-icons/bs";

const CardSlider = ({ dashboard }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:5001/devnation-asia-app/asia-southeast1/user/liveSessions/getAll/4apSW5zxhQIUoAZqmMdi")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container main-card-container">
      <div className="container cardContainer" ref={dashboard}>
        {items.map((item) => {
          return (
            <div className="maindiv mx-2">
              <div className="innerdiv my-1">
                <div className="d-flex calender my-2">
                  <span className="px-2">
                    <BsCalendar2EventFill />
                  </span>
                  <div className="px-1">{item.startDate}</div>
                  <p>@ </p>
                  {/* <div className="px-1">{`${item.day}th, `}</div> */}
                  {/* <div className="px-1">{item.year}</div> */}
                  <div>{item.startTime}</div>
                  <div className="px-1">{item.timezone}</div>
                </div>
                <div className="mx-1">
                  <h4>{item.meetingLabel}</h4>
                </div>
                <div className="mx-1 inst">
                  <h6>Instructor:</h6>
                </div>
                <div className="mx-1 inst">
                  <h3>{item.instructorName}</h3>
                </div>
                <div className="mx-1 cert">
                  <h6>{item.InstructorCertification}</h6>
                </div>
                <div className="mx-1 current">
                  <h5>{"Upcoming"}</h5>
                </div>
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
     
    );
  }
 
};

export default CardSlider;
