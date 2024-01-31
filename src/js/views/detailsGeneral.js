import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useLocation } from "react-router-dom";

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
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const path = pathId.split("/")[1];
  const lastCharachterUid = pathId.split("/").pop();

  return (
    <div className="container w-50 mb-5 mt-5 body bg-black text-white">
      <div className="bg-black text-white">
        <Link to="/home">
          <button className="w-100 text-white bg-black">Home</button>
        </Link>
      </div>
      {apiLoaded ? (
        <>
          <div className="row d-flex justify-content-around">
            <div className="col-md-6">
              <img
                className="mt-3"
                src={`https://starwars-visualguide.com/assets/img/${
                  path === "people" ? "characters" : path
                }/${lastCharachterUid}.jpg`}
                style={{ maxWidth: "100%" }} // Limita el tamaño de la imagen al 50% del div contenedor
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://starwars-visualguide.com/assets/img/planets/8.jpg";
                }}
              />
            </div>
            <div className="col-md-6">
              {store.details && store.details.properties && (
                <>
                  <h1 className="text-center mt-3">
                    {store.details.properties.name}
                  </h1>
                </>
              )}
            </div>
          </div>
          <div className="row">
            <hr
              className="divider mt-4"
              style={{ color: "red", height: "5px" }}
            />
            {store.details && store.details.properties && (
              <>
                {Object.entries(store.details.properties)
                  .slice(0, 6)
                  .map(([key, value]) => (
                    <div key={key} className="col-md-4">
                      <div className="card my-3">
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
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};
