import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicModal from './BasicModal';
import StaticModal from './StaticModal';
import CenteredModal from './CenteredModal';
import FullScreenModal from './FullScreenModal';
import ReactModal from './ReactModal';

const App = () => {

  return (
    <div className="App">
      <h1 className="display-1 text-white bg-secondary">Modal Study</h1>
      <div className="container border-bottom mt-2">
        <p>基本のモーダル</p>
        <BasicModal />
      </div>
      <div className="container border-bottom mt-2">
        <p>閉じないモーダル</p>
        <StaticModal />
      </div>
      <div className="container border-bottom mt-2">
        <p>真ん中配置</p>
        <CenteredModal />
      </div>
      <div className="container border-bottom mt-2">
        <p>フルスクリーン</p>
        <FullScreenModal />
      </div>
      <div className="container border-bottom mt-2">
        <p>react-modalを使う</p>
        <ReactModal />
      </div>
      <p className="text-end bg-secondary mt-4 py-2"><a className='text-white' href="https://katahiro.com">katahiro.com</a></p>
    </div>
  )
}

export default App
