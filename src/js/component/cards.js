import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs"; 
import { Context } from "../store/appContext";


export const Cards = (props) => {

  const {store, actions } = useContext(Context)

  const handleLike = () => {
    props.onLike(props.name);
  };


  const personajes = store.characterData


  return (
    <div className="text-center m-2">
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-start p-2">{personajes[0]?.name}</h5>
            <p className="card-text text-start ms-2">height :{personajes[0]?.properties?.height[0]?.height}</p>
            <p className="card-text text-start ms-2">Hair Color :{personajes[0]?.hair_color}</p>
            <p className="card-text text-start ms-2">Skin Color :{personajes[0]?.skin_color}</p>
            <p className="card-text text-start ms-2">Eyes Color :{personajes[0]?.eye_color}</p>
            <p className="card-text text-start ms-2">Gender :{personajes[0]?.gender}</p>
            <div className="d-flex justify-content-around">
              <Link to={
               "/details"}>
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
