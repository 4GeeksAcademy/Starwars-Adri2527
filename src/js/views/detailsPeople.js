import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = ({ name, diameter }) => {
  const { store, actions } = useContext(Context);
  const location = useLocation();
  const pathId = location.pathname;
  const [apiloaded, setApiloaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Ruta actual:", pathId);
        await actions.loadItemOnClick(pathId, setApiloaded); // Pasar setApiloaded como argumento
        console.log(store.details);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Link to="/home">
        <button>Home</button>
      </Link>
      {apiloaded ? (
        <>
          <div className="card mb-3" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="" className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{name} </h5>

                  <p className="card-text">
                    {diameter}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </>) : <div class="loader"></div>}

    </div>
  );
};
