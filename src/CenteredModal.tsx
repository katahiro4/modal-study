import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';

const CenteredModal = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Button variant="primary"  onClick={handleShow}>Centered Modal</Button>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>bootstrap Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>大きい真ん中配置のモーダル<hr />size=lg centered</Modal.Body>
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

export default CenteredModal
