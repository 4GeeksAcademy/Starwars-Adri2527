import React from "react";
import { Link } from "react-router-dom";

export const Cards = ({ type, idNumber, name, onLike }) => {
  const handleLike = () => {
    onLike(name);
  };

  // Construir la URL de la imagen
  let imageUrl = `https://starwars-visualguide.com/assets/img/${type}/${idNumber}.jpg`;

  // Corregir la URL si el idNumber es 0
  if (idNumber === "1" && type === "planets") {
    imageUrl = `https://starwars-visualguide.com/assets/img/planets/5.jpg`;
  }

  const getLinkPath = () => {
    switch (type) {
      case "people":
        return `/characters/${idNumber}`;
      case "planets":
        return `/planets/${idNumber}`;
      case "vehicles":
        return `/vehicles/${idNumber}`;
      default:
        return "/";
    }
  };

  return (
    <div className="text-center m-2 bg-black text-white">
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body bg-black text-white">
            <h5 className="card-title text-start p-2">{name}</h5>
            <div className="d-flex justify-content-around">
              <Link to={getLinkPath()}>
                <button className="btn btn-primary">Learn More</button>
              </Link>
              <button className="btn btn-success" onClick={handleLike}>
                <i className="fa-solid fa-heart"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
