import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; 

export const Navbar = ({ likedCards, setLikedCards }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Función para eliminar una tarjeta favorita
  const removeLikedCard = (index) => {
    const newLikedCards = [...likedCards];
    newLikedCards.splice(index, 1);
    // Actualizar el estado local likedCards
    setLikedCards(newLikedCards);
  };

  // Efecto secundario para actualizar el almacenamiento local cuando likedCards cambia
  useEffect(() => {
    // Convertir likedCards a cadena JSON y guardar en el almacenamiento local
    localStorage.setItem("likedCards", JSON.stringify(likedCards));
  }, [likedCards]);

  return (
    <>
      <nav className="navbar navbar-black bg-black text-white mb-3">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 ms-3">StarWars</span>
        </Link>
        <div className="ml-auto">
          <button className="btn botonEstelares me-3 btn-secondary" onClick={handleShow}>
            Favs ({likedCards.length})
          </button>
        </div>
      </nav>
      <Modal show={show} onHide={handleClose} dialogClassName="bg-dark text-white">
        <Modal.Header  className="bg-dark text-white" closeButton>
          <Modal.Title className="bg-dark text-white">Favorites</Modal.Title>
        </Modal.Header>
        <Modal.Body  className="bg-dark text-white">
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
        <Modal.Footer  className="bg-dark text-white">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
