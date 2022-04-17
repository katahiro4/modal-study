import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';

const StaticModal = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Button variant="primary"  onClick={handleShow}>Static Modal</Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>bootstrap Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          モーダル外クリックでもESCキーでも閉じないモーダル<br/>
          ×ボタンかcloseで閉じます<hr />
          backdrop="static" keyboard="false"
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>  
    </div>
  );
}

export default StaticModal
