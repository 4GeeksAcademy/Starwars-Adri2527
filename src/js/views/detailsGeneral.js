import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useLocation } from "react-router-dom";
import { BiHousesFill } from 'react-icons/bi';

export const Details = () => {
  const { store, actions } = useContext(Context);
  const location = useLocation();
  const pathId = location.pathname;
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Ruta actual:", pathId);
        await actions.loadItemOnClick(pathId, setApiLoaded);
        // Una vez cargada la API, establece el estado apiLoaded en true
        setApiLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const path = pathId.split("/")[1];
  const lastCharachterUid = pathId.split("/").pop();

  return (
    <div className="container mt-1 body bg-black text-white">

      {apiLoaded ? (
        <>
          <div className="row d-flex justify-content-evenly ">
            <div className="col-md-6">
              <img
                className="mt-3"
                src={`https://starwars-visualguide.com/assets/img/${path === "people" ? "characters" : path
                  }/${lastCharachterUid}.jpg`}
                style={{ maxWidth: "100%", maxHeight: "85%" }} // Añade maxHeight al estilo en línea
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://starwars-visualguide.com/assets/img/planets/8.jpg";
                }}
              />
            </div>
            <div className="col-md-6 ">
              {store.details && store.details.properties && (
                <>
                  <h1 className="text-center mt-3">
                    {store.details.properties.name}
                  </h1>
                </>
              )}
              <div className="row">
                {store.details && store.details.properties && (
                  <>
                    {Object.entries(store.details.properties)
                      .slice(0, 6)
                      .map(([key, value]) => (
                        <div key={key} className="col-md-4">
                          <div className="card my-2">
                            <div className="card-body bg-black">
                              <h6 className="fw-bold text-center">
                                {key.toUpperCase()}
                              </h6>
                              <p className="card-text text-center">{value}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="d-flex ">
            <Link to="/home">
              <div className="bg-black text-white botonEstelar btn-secondary">
                <button className="botonEstelares btn-secondary text-white">
                  Back
                </button>
              </div>
            </Link>
            <Link to="/">
              <div className="bg-black text-white botonEstelar btn-secondary">
                <button className="botonEstelares btn-secondary text-white">
                  Home
                </button>
              </div>
            </Link>
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
