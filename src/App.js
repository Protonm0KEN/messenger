import React, {useState} from "react";
import MessengerHeader from "./components/MessengerHeader/MessengerHeader";
import MessengerFooter from "./components/MessengerFooter/MessengerFooter";
import {Modal} from "./components/Modal/Modal";
import "./App.scss";

const App = () => {
  const [images, setImages] = useState([]);
  const [items, setItems] = useState([]);
  const [comment, setComment] = useState("");
  const [commentItem, setCommentItem] = useState([]);

  const date = new Date();
  const getHours = date.getHours();
  const getMinutes = date.getMinutes();
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  // eslint-disable-next-line no-unused-vars
  return (
    <div className="App">
      <div className="App__container container">
        <div className="messenger">
          <div className="messenger__wrapper">
            <MessengerHeader />
            <div className="main">
              {url && comment ? images.map((item, index) => {
                return (
                  <div key={index} className="image">
                    <img src={item} alt="" />
                    <p>{commentItem[index]}</p>
                  </div>
                );
              }) :
                ""}
              {items ?
                items.map((item, index) => {
                  return (
                    <div key={index} className="message">
                      <p className="message__content">{item}</p>
                      <p>
                        {getHours} :{" "}
                        {getMinutes < 10 ? "0" + getMinutes : getMinutes}
                      </p>
                    </div>
                  );
                }) :
                ""}
            </div>
            <MessengerFooter
              message={message}
              setMessage={setMessage}
              handleOpenModal={handleOpenModal}
              items={items}
              setItems={setItems}
            />
          </div>
        </div>
        <Modal
          comment={comment}
          setComment={setComment}
          url={url}
          setUrl={setUrl}
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          setItems={setItems}
          images={images}
          setImages={setImages}
          setCommentItem={setCommentItem}
          commentItem={commentItem}
          message={items}
        />
      </div>
    </div>
  );
};
export default App;
