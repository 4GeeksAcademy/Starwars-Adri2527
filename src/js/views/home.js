import React, { useContext, useState, useEffect } from "react";
import { Cards } from "../component/generalCards";
import { Navbar } from "../component/navbar";

import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const [likedCards, setLikedCards] = useState([]);
  const [apiLoaded, setApiLoaded] = useState(false);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (store.characters.length === 0) {
          await actions.fetchCharacters();
        }

        if (store.planets.length === 0) {
          await actions.fetchPlanets();
        }

        if (store.vehicles.length === 0) {
          await actions.fetchVehicles();
        }

        setApiLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [actions, store.characters, store.planets, store.vehicles]);

  // Función para manejar el clic en el botón de "Me gusta"
  const handleLike = (name) => {
    const updatedLikedCards = [...likedCards, name];
    // Actualizar el estado local likedCards
    setLikedCards(updatedLikedCards);
    // Guardar likedCards en el almacenamiento local
    localStorage.setItem("likedCards", JSON.stringify(updatedLikedCards));
  };

  // Cargar likedCards del almacenamiento local al montar el componente
  useEffect(() => {
    const storedLikedCards = localStorage.getItem("likedCards");
    if (storedLikedCards) {
      setLikedCards(JSON.parse(storedLikedCards));
    }
  }, []);

  return (
    <div className="text-center">
      {apiLoaded ? (
        <>
          <Navbar likedCards={likedCards} setLikedCards={setLikedCards} />
          <div className="mt-2">
            <h1 className="py-3 text-white">Characters</h1>
            <div className="d-flex flex-wrap justify-content-around mx-4">
              {store.characters.map((character, index) => (
                <Cards
                  key={index}
                  type="characters"
                  idNumber={character.uid}
                  name={character.name}
                  onLike={handleLike} 
                />
              ))}
            </div>
          </div>

          <div className="mt-5 border-top">
            <h1 className="py-3 text-white">Planets</h1>
            <div className="d-flex flex-wrap justify-content-around">
              {store.planets.map((planet) => (
                <Cards
                  key={planet.uid}
                  type="planets"
                  idNumber={planet.uid}
                  name={planet.name}
                  onLike={handleLike} 
                />
              ))}
            </div>
          </div>

          <div className="mt-5 border-top">
            <h1 className="py-3 text-white">Vehicles</h1>
            <div className="d-flex flex-wrap justify-content-around">
              {store.vehicles.map((vehicle) => (
                <Cards
                  key={vehicle.uid}
                  type="vehicles"
                  idNumber={vehicle.uid}
                  name={vehicle.name}
                  onLike={handleLike} 
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};
