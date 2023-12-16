import React, { useEffect } from "react";

const Modal = (props) => {
  function closeModal() {
    props.setIsShowModal(false);
  }

  useEffect(() => {
    // const socket = new WebSocket("http://localhost:5173/api/chat");

    // socket.onopen()

    // Clean-up function
    return () => {
      console.log("component unmounting olduğunda");
      // socket.close()
    };
  }, []);

  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <p>{props.desc}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={closeModal}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: "0.3",
          top: "0",
          zIndex: "-1",
        }}
      ></div>
    </div>
  );
};

export default Modal;
