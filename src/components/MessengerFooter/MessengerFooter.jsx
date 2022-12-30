import React from 'react'
import './MessengerFooter.scss'
import camera from '../../assets/icons/Camera.svg'
import sendMessageImg from '../../assets/images/free-icon-send-8084272.png'

const MessengerFooter = ({handleOpenModal, setMessage, message, items, setItems}) => {
    const handleSetMessage = (e) => {
        e.preventDefault()
        setMessage(e.target.value)
    }
    const handlePushItem = (e) => {
        e.preventDefault()
        if(message){
            items.push(message)
        }
        console.log('Список сообщений', items)
    }
    return (
        <footer className="footer">
            <div className='footer__content'>
                <form onSubmit={handlePushItem}>
                    <input onChange={handleSetMessage} value={message} placeholder='Написать сообщение...'
                           className='footer__content-input'></input>
                </form>
                <button className={'sendMessage'}><img className='send-img' src={sendMessageImg} alt=""/></button>
                <button onClick={handleOpenModal} className='footer__content-button'>
                    <img alt='camera' className='' src={camera}></img>
                </button>
            </div>
        </footer>
    )
}

export default MessengerFooter
