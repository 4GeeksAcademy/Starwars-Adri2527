import React, { useContext, useState, useEffect } from "react";
import { Cards } from "../component/charactersCards";
import { Navbar } from "../component/navbar";

import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const [likedCards, setLikedCards] = useState([]);
  const {store, actions} = useContext(Context);

  
      // UseEffect para los characters
  useEffect(() => {
    // Obtener los personajes si el tamaño de la lista de personajes es 0
    if (store.characters.length === 0) {
      actions.fetchCharacters();
    }
  }, [actions, store.characters]);

    // UseEffect para los planetas
  useEffect(() => {
    
    if (store.planets.length === 0) {
      actions.fetchPlanets();
    }
  }, [actions, store.planets]);

    // UseEffect para los vehiculos
  useEffect(() => {
    
    if (store.vehicles.length === 0) {
      actions.fetchVehicles();
    }
  }, [actions, store.vehicles]);

  

  const charactersId = store.characters.map ((x)=> x.uid)

  const planetsId = store.planets.map ((x)=> x.uid)

  const vehiclesId = store.vehicles.map ((x)=> x.uid)

  const imgUrlPlanets = (planetsId) => {
    return `https://starwars-visualguide.com/assets/img/planets/${planetsId === "1" ? "8" : planetsId}.jpg`;
};


  const imgUrlVehicles = (vehiclesId)=> {
    return `https://starwars-visualguide.com/assets/img/vehicles/${vehiclesId}.jpg`
  }


  const imgUrl = (charactersId)=> {
    return `https://starwars-visualguide.com/assets/img/characters/${charactersId}.jpg`
  }
  return (

                  // Characters
    <div className="text-center ">
      <Navbar likedCards={likedCards} setLikedCards={setLikedCards} />
      <div className="mt-2">
        <h1 className="py-3">Characters</h1>
        <div className="d-flex flex-wrap justify-content-around mx-4">
          {store.characters.map((x,index)=> <Cards
           idNumber={x.uid}
            key={index}
            name= {x.name}
            image={imgUrl(x.uid)}
            onLike={(name) => setLikedCards([...likedCards, name])}
          />)}
          
        </div>
      </div>

                    {/* Planets */}

      <div className="mt-5 border-top">
        <h1 className="py-3">Planets</h1>
        <div className="d-flex flex-wrap justify-content-around ">
        {store.planets.map((x)=> <Cards
            key={x.uid}
            name= {x.name}
            image={imgUrlPlanets(x.uid)}
            onLike={(name) => setLikedCards([...likedCards, name])}
          />)}
        </div>
      </div>

                        {/* Vehicles */}

      <div className="mt-5 border-top">
        <h1 className="py-3">Vehicles</h1>
        <div className="d-flex flex-wrap justify-content-around ">
        {store.vehicles.map((x)=> <Cards
            key={x.uid}
            name= {x.name}
            image={imgUrlVehicles(x.uid)}
            onLike={(name) => setLikedCards([...likedCards, name])}
          />)}
        </div>
      </div>
    </div>

    
  );
};