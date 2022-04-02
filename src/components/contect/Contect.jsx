import React, { useState } from "react";
import "./contect.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Contect = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const data = {
    name,
    num,
    email,
    address,
  };

  const addContect = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://contect1408.herokuapp.com/api/contect/contect",
        data
      );
    } catch (err) {}
    setName("");
    setNum("");
    setEmail("");
    setAddress("");
  };

  return (
    <div className="contectMain">
      <h3>ADD A NEW CONTECT HERE</h3>
      <Link to="/">
        <p>Home</p>
      </Link>
      <form className="form" onSubmit={addContect}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="9802098020"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Add Contect</button>
      </form>
    </div>
  );
};

export default Contect;
