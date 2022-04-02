import React, { useState, useEffect } from "react";
import "./home.css";
import SingleContect from "../../components/singleContect/SingleContect";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [contects, setContects] = useState([]);
  

  useEffect(() => {
    const getContect = async () => {
      const res = await axios.post(
        "https://contect1408.herokuapp.com/api/contect/all"
      );
      setContects(res.data);
    };
    getContect();
  }, []);
  return (
    <div className="container">
      <dic className="contectList">
        <div className="contectHeader">
          <p className=" commen name">Name</p>
          <p className=" commen number">Number</p>
          <p className=" commen email">Email</p>
          <p className=" commen address">Address</p>
          <div className="homeBtn">
            <Link to="/contect" >
              <button>Add new contect</button>
            </Link>
          </div>
        </div>

        {/*..........................contect list.............. */}
        <div className="contectListItems">
          {contects.map((c) => (
            <SingleContect
              name={c.name}
              num={c.num}
              email={c.email}
              address={c.address}
              key={c._id}
              id={c._id}
            />
          ))}
        </div>
      </dic>
    </div>
  );
};

export default Home;
