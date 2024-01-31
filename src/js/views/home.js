import React, { useContext, useState, useEffect } from "react";
import { Cards } from "../component/generalCards";
import { Navbar } from "../component/navbar";
import { Details } from "./detailsGeneral";

import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const [likedCards, setLikedCards] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.characters.length === 0) {
      actions.fetchCharacters();
    }

    if (store.planets.length === 0) {
      actions.fetchPlanets();
    }

    if (store.vehicles.length === 0) {
      actions.fetchVehicles();
    }
  }, [actions, store.characters, store.planets, store.vehicles]);

  return (
    <div className="text-center">
  <Navbar likedCards={likedCards} setLikedCards={setLikedCards} />
  <div className="mt-2">
    <h1 className="py-3  text-white">Characters</h1>
    <div className="d-flex flex-wrap justify-content-around mx-4">
      {store.characters.map((character, index) => (
        <Cards
          key={index}
          type="people" // Aquí puedes usar una lógica similar para determinar el tipo según los datos disponibles en tu store
          idNumber={character.uid}
          name={character.name}
          onLike={(name) => setLikedCards([...likedCards, name])}
        />
      ))}
    </div>
  </div>

      <div className="mt-5 border-top">
        <h1 className="py-3 text-white">Planets</h1>
        <div className="d-flex flex-wrap justify-content-around ">
          {store.planets.map((planet) => (
            <Cards
              key={planet.uid}
              type="planets"
              idNumber={planet.uid}
              name={planet.name}
              onLike={(name) => setLikedCards([...likedCards, name])}
            />
          ))}
        </div>
      </div>

      <div className="mt-5 border-top">
        <h1 className="py-3  text-white">Vehicles</h1>
        <div className="d-flex flex-wrap justify-content-around ">
          {store.vehicles.map((vehicle) => (
            <Cards
              key={vehicle.uid}
              type="vehicles"
              idNumber={vehicle.uid}
              name={vehicle.name}
              onLike={(name) => setLikedCards([...likedCards, name])}
            />
          ))}
        </div>
      </div>
      <Details />
    </div>
  );
};
