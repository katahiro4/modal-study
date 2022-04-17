import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';

const FullScreenModal = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Button variant="primary"  onClick={handleShow}>FullScreen</Button>
      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>bootstrap Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>FullScreenのモーダル<hr />fullscreen=true</Modal.Body>
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

export default FullScreenModal
