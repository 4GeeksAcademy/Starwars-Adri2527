import React, { useState } from "react";
import { Cards } from "../component/cards";
import { Navbar } from "../component/navbar";

import "../../styles/home.css";

export const Home = () => {
  const [likedCards, setLikedCards] = useState([]);

  return (
    <div className="text-center ">
      <Navbar likedCards={likedCards} setLikedCards={setLikedCards} />
      <div className="mt-2">
        <h1 className="py-3">Characters</h1>
        <div className="d-inline-flex mx-4">

          <Cards
            onLike={(name) => setLikedCards([...likedCards, name])}
          />
          
        </div>
      </div>
      <div className="mt-5 border-top">
        <h1 className="py-3">Planets</h1>
        <div className="d-flex flex-wrap justify-content-around ">
          <Cards
            name="Eustaquio"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL60nDFTtZoNrif00LhpIPN3YDRCEiuQ6wQ56NSht60mbz3ylRUMr7PO3pwg&s"
            gender="Male"
            hairColor="Brown"
            eyesColor="Blue"
            onLike={(name) => setLikedCards([...likedCards, name])}
          />
        
        </div>
      </div>
    </div>
  );
};
