/** @format */

import React, { useEffect } from "react";
import Modal from "@mui/material/Modal";
export default function SuccessModal(props) {
  useEffect(() => {
    let closeModalTimeOut = setTimeout(() => {
      props.toggleModal(props.stateName);
    }, 20000);
    if (props.isOpen) {
    } else {
      clearTimeout(closeModalTimeOut);
    }
  }, [props.isOpen]);
  return (
    <Modal
      open={props.isOpen}
      onClose={() => props.toggleModal(props.stateName)}>
      <div className='card-container'>
        <h3>Payment has been added successfuly</h3>
        <button onClick={() => props.toggleModal(props.stateName)}>Ok</button>
      </div>
    </Modal>
  );
}
