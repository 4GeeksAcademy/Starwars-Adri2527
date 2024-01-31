import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link aquí

export const Navbar = ({ likedCards, setLikedCards }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeLikedCard = (index) => {
    const newLikedCards = [...likedCards];
    newLikedCards.splice(index, 1);
    setLikedCards(newLikedCards);
  };

  return (
    <>
      <nav className="navbar navbar-black bg-black  text-white mb-3">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 ms-3">StarWars</span>
        </Link>
        <div className="ml-auto">
          <button className="btn botonEstelares me-3 btn-secondary" onClick={handleShow}>
            Favs ({likedCards.length})
          </button>
        </div>
      </nav>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Favorites</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {likedCards.map((name, index) => (
              <li className="mt-3" key={index}>
                <h4>{name}
                  <button className="btn btn-danger ms-2 " onClick={() => removeLikedCard(index)}>X</button>
                </h4>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
