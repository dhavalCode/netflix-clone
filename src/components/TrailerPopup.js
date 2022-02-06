import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import YouTube from "react-youtube";
import { Modal } from "react-bootstrap";

function TrailerPopup({ trailerUrl, title }) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (trailerUrl) handleShow();
  }, [trailerUrl]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl" keyboard={false}>
        <Modal.Header
          style={{
            backgroundColor: "#111",
            color: "whitesmoke",
            border: "none",
          }}
        >
          <Modal.Title>{title}</Modal.Title>
          <i
            onClick={handleClose}
            className="btn-close btn-close-white"
            style={{ color: "whitesmoke", cursor: "pointer" }}
          ></i>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#111" }}>
          {isLoading && <Loading />}
          {trailerUrl !== "error" ? (
            <YouTube
              videoId={trailerUrl}
              opts={opts}
              onReady={() => setIsLoading(false)}
            />
          ) : (
            <div className="text-center">
              <LazyLoadImage
                placeholder={<Loading />}
                src="popcon.png"
                alt="Not Found"
                className="img-fluid"
                width="300px"
                afterLoad={() => setIsLoading(false)}
              />
              <h2 className="text-light mt-3 mb-4">
                Sorry ! Trailer not available right now
              </h2>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}


//Loading Component

function Loading() {
  return (
    <div className="modal_spinner">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default TrailerPopup;
