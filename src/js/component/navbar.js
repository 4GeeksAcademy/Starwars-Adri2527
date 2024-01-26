import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const Navbar = ({ likedCards }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="navbar navbar-light bg-light mb-3">
        <span className="navbar-brand mb-0 h1 ms-3">StarWars</span>
        <div className="ml-auto">
          <button className="btn btn-secondary me-3" onClick={handleShow}>
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
              <li key={index}>{name}</li>
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
