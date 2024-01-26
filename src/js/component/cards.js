import React from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs"; 

export const Cards = (props) => {
  const handleLike = () => {
    props.onLike(props.name);
  };

  return (
    <div className="text-center m-2">
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-start p-2">{props.name}</h5>
            <p className="card-text text-start ms-2">Gender :{props.gender}</p>
            <p className="card-text text-start ms-2">Hair Color :{props.hairColor}</p>
            <p className="card-text text-start ms-2">Eyes Color : {props.eyesColor}</p>
            <div className="d-flex justify-content-around">
              <Link to="/details">
                <button className="btn btn-primary">Learn More</button>
              </Link>
              <button className="btn btn-success" onClick={handleLike}>
                <BsHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
