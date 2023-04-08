import "./Modal.css";
import React, {Fragment} from "react";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalTo = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalTo)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalTo
      )}
    </Fragment>
  );
};

export default Modal;
