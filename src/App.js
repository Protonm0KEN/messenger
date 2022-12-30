import './App.scss';
import MessengerFooter from './components/MessengerFooter/MessengerFooter';
import MessengerHeader from './components/MessengerHeader/MessengerHeader';
import {Modal} from "./components/Modal/Modal";
import React, {useState} from "react";


function App() {
    const date = new Date();
    const getHours = date.getHours()
    const getMinutes = date.getMinutes();
    const [items, setItems] = useState([])

    const [comment, setComment] = useState('');
    const [url, setUrl] = useState('');
    const [message, setMessage] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    return (
        <div className="App">
            <div className='App__container container'>
                <div className='messenger'>
                    <div className='messenger__wrapper'>
                        <MessengerHeader/>
                        <div className="main">
                            {items ? items.map((item, index) => {
                                return <div className='message' key={index}>
                                    <div className='message__content'>{item}</div>
                                    <div className='message__date'>{getHours} : {getMinutes}</div>
                                </div> }): null}
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
                    urlInput={url}
                    setUrl={setUrl}
                    openModal={openModal}
                    handleCloseModal={handleCloseModal}/>
            </div>
        </div>
    );
}

export default App;