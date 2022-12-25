import React from 'react'
import './MessengerFooter.scss'
import camera from '../../assets/icons/Camera.svg'
const MessengerFooter = ({handleOpenModal}) => {
  return (
    <footer className="footer">
        <div className='footer__content'>
            <input placeholder='Написать сообщение...' className='footer__content-input'></input>
            <button onClick={handleOpenModal} className='footer__content-button'>
                <img alt='camera' className='footer__content__button-img' src={camera}></img>
            </button>
        </div>
    </footer>
  )
}

export default MessengerFooter
