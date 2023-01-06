import React from "react";
import "./MessengerFooter.scss";
import camera from "../../assets/icons/Camera.svg";
import sendMessageImg from "../../assets/images/free-icon-send-8084272.png";

// eslint-disable-next-line react/prop-types
const MessengerFooter = ({handleOpenModal, setMessage, message, items, setItems}) => {
  const handleSetMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  const handlePushItem = (e) => {
    const textItems = {
      message,
    };
    e.preventDefault();
    if (message) {
      setItems([...items, message]);
    }
    console.log("Список сообщений: ", textItems);
  };
  return (
    <footer className="footer">
      <div className='footer__content'>
        <form onSubmit={handlePushItem}>
          <input onChange={handleSetMessage} value={message} placeholder='Написать сообщение...'
            className='footer__content-input'/>
        </form>
        <button onClick={handlePushItem} className={"sendMessage"}><img className='send-img' src={sendMessageImg} alt=""/></button>
        <button onClick={handleOpenModal} className='footer__content-button'>
          <img alt='camera' className='' src={camera}></img>
        </button>
      </div>
    </footer>
  );
};

export default MessengerFooter;
