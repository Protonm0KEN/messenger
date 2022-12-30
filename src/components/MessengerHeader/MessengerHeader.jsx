import React from 'react'
import alexandr from '../../assets/icons/Alexandr.png'
import './MessengerHeader.scss'

const MessengerHeader = () => {
    return (
        <header className="header">
            <div className='header__content'>
                <div className='header__content__profile'>
                    <img alt="" src={alexandr} className='header__content__profile-img'></img>
                    <div className='header__content__profile__info '>
                        <h1 className='header__content__profile__info-nickName'>Александр</h1>
                        <p className='header__content__profile__info-status'>Онлайн</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MessengerHeader
