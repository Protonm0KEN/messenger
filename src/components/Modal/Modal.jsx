import './Modal.scss'
export const Modal = ({openModal, handleCloseModal, content}) => {
    const text = 'Отправить картинку'
    const url = 'URL'
    const review = 'Комментарий'
    return (
        <div className={`modal ${openModal ? 'active' : 'noactive'}`}>
            <div className="modal__wrapper">
                <p className="modal-text">{text}</p>
                <form className="modal__inputs">

                    <div className="modal__group">
                        <input type="text" className="url__input" required value={content}/>
                        <span></span>
                        <label>{url}</label>
                    </div>
                    <div className="modal__group">
                        <input type="text" className="url__input" required value={content}/>
                        <span></span>
                        <label>{review}</label>
                    </div>
                </form>
                <div className="modal__buttons">
                    <button onClick={handleCloseModal} className="delete-button">ОТМЕНА</button>
                    <button className="send-button">ОТПРАВИТЬ</button>
                </div>
            </div>
        </div>
    );
}