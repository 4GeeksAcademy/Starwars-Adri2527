import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Details = (props) => {
    return (
        <div className="container">
            <div className="card mb-3" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.image} className="img-fluid rounded-start w-100" />

                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">
                                {props.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 d-flex justify-content-around p-4">
                <div className="border-end border-2">
                    <h6 className="border-bottom border-3 text-center">Apparences</h6>
                    <span className="d-flex flex-wrap text-center">
                        {props.apparences}
                    </span>
                </div>
                <div className="border-end border-2">
                    <h6 className="border-bottom border-3 text-center">Affiliations</h6>
                    <span className="d-flex flex-wrap text-center">
                        {props.affiliations}
                    </span>
                </div>
                <div className="border-end border-2">
                    <h6 className="border-bottom border-3 text-center">Locations</h6>
                    <span className="d-flex flex-wrap text-center">
                        {props.locations}
                    </span>
                </div>
                <div className="border-end border-2">
                    <h6 className="border-bottom border-3 text-center">Gender</h6>
                    <span className="d-flex flex-wrap text-center">
                        {props.gender}
                    </span>
                </div>
                <div className="border-end border-2 ">
                    <h6 className="border-bottom border-3 text-center">Dimensions</h6>
                    <span className="d-flex flex-wrap text-center">
                        {props.dimensions}
                    </span>
                </div>
                <div className="border-end border-2 ">
                    <h6 className="border-bottom border-3 text-center">Species</h6>
                    <span className="d-flex flex-wrap text-center">
                        {props.species}
                    </span>
                </div>
                <div className="border-end border-2 ">
                    <h6 className="border-bottom border-3 text-center">Vehicles</h6>
                    <span className="d-flex flex-wrap text-center">
                        {props.vehicles}
                    </span>
                </div>
                <div className="border-end border-2 ">
                    <h6 className="border-bottom border-3 text-center">Weapons</h6>
                    <span className="d-flex flex-wrap text-center">
                        {props.weapons}
                    </span>
                </div>
                <div className="border-end border-2 ">
                    <h6 className="border-bottom border-3 text-center">Tools</h6>
                    <span className="d-flex flex-wrap text-center">
                        {props.tools}
                    </span>
                </div>
            </div>
        </div>
    );
};
