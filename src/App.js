
import './App.scss';
import MessengerFooter from './components/MessengerFooter/MessengerFooter';
import MessengerHeader from './components/MessengerHeader/MessengerHeader';
import MessengerMain from './components/MessengerMain/MessengerMain';
import {Modal} from "./components/Modal/Modal";
import React, {useState} from "react";


function App() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const [content, setContent] = useState("");
  return (
    <div className="App">
      <div className='App__container container'>
        <div className='messenger'>
          <div className='messenger__wrapper'>
            <MessengerHeader />
            <MessengerMain/>
            <MessengerFooter handleOpenModal = {handleOpenModal}/>
          </div>
        </div>
        <Modal content={content} openModal = {openModal} handleCloseModal = {handleCloseModal}/>
      </div>
    </div>
  );
}

export default App;
