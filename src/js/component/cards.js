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
  console.log(personajes)
  

  return (
    <div className="text-center m-2">

      <div>
        {store.characterData.map((characters , index ) =>{
          const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + (index + 1) + ".jpg";
          return (
            <div  key={index} className="card" style={{ width: "18rem" }}>
            <img src={urlImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-start p-2">{characters.name}</h5>
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
          )
        } )}
       
      </div>

    </div>
  );
};
