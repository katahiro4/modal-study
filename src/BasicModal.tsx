import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';

const BasicModal = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Button variant="primary"  onClick={handleShow}>Basic Modal</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>基本のModal</Modal.Title>
        </Modal.Header>
        <Modal.Body>modal test モーダルテスト</Modal.Body>
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

export default BasicModal
