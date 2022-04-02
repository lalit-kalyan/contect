import React from "react";
import "./sContect.css";
import axios from "axios";

const SingleContect = ({ name, num, email, address, id }) => {
  const addNewContect = async () => {
    try {
      await axios.delete(`https://contect1408.herokuapp.com/api/contect/${id}` , {
        data:{num}
      } );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contectItem">
      <p className=" commen name">{name}</p>
      <p className=" commen number">{num}</p>
      <p className=" commen email">{email}</p>
      <p className=" commen address">{address}</p>
      <div className="contectItemBtn">
        <button onClick={addNewContect}>Delete</button>
      </div>
    </div>
  );
};

export default SingleContect;
