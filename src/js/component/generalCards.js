import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Cards = ({ type, idNumber, name, onLike }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

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
        return `/people/${idNumber}`;
      case "planets":
        return `/planets/${idNumber}`;
      case "vehicles":
        return `/vehicles/${idNumber}`;
      default:
        return "/";
    }
  };

  return (
    <div className="text-center m-2 bg-black text-white position-relative">
      {!imageLoaded && (
        <div className="loader position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center"></div>
      )}
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            onLoad={handleImageLoad}
          />
          <div className="card-body bg-black text-white">
            <h5 className="card-title text-start p-2">{name}</h5>
            <div className="d-flex justify-content-between">
              <Link to={getLinkPath()}>
                <button className="botonEstelares btn btn-secondary ">LEARN MORE</button>
              </Link>
              <button className="botonEstelares btn btn-secondary" onClick={handleLike}>
                FAVS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
