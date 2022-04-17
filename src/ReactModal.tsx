import React, { useState } from 'react';
import  Modal  from 'react-modal';

Modal.setAppElement("#root")

//overlayでモーダルの外側、contentでモーダルの内側をスタイリング出来る
const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
  content: {
    top: "5rem",
    left: "5rem",
    right: "5rem",
    bottom: "5rem",
    backgroundColor: "paleturquoise",
    borderRadius: "1rem",
    padding: "1.5rem"
  }
}

//onRequestClose ハンドラは、Esc キーを押したときや、ダイアログ外の領域をクリックしたときなどに呼び出されます。
const ReactModal = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <button onClick={handleShow}>react-modal</button>
      <Modal isOpen={show} style={modalStyle} onRequestClose={handleClose}>
        <button onClick={handleClose}>Close Modal</button>
        <p>overlayでモーダルの外側、contentでモーダルの内側をスタイリング出来る</p>
        <p>Esc押したときや、ダイアログ外の領域をクリックした呼び出されるonRequestCloseハンドラにhandleCloseバインドすれば、外側クリック、ESCキーで閉じられる</p>
      </Modal>
    </div>
  );
}

export default ReactModal
