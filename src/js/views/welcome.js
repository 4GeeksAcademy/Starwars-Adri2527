import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="">
      <Link to="/home">
        <button className="w-100 bg-black text-white SB">
          Learn More About Stars Wars
        </button>
      </Link>
      <div className="">
      <Link to="/home">
        <img
          className="fondoWelcome"
          src="https://img.freepik.com/fotos-premium/fondos-pantalla-star-wars-que-estan-fuera-mundo_250469-21298.jpg"
          alt="Star Wars background"
        />
         </Link>
      </div>
    </div>
  );
};
