import './Modal.scss'
export const Modal = ({openModal, handleCloseModal, setUrl, urlInput, setComment, comment}) => {
    const text = 'Отправить картинку'
    const url = 'URL'
    const review = 'Комментарий'
    const onChangeUrl = (e) => {
        setUrl(e.target.value)
    }
    const onChangeComment = (e) => {
        setComment(e.target.value)
    }
    return (
        <div className={`modal ${openModal ? 'active' : 'noactive'}`}>
            <div className="modal__wrapper">
                <p className="modal-text">{text}</p>
                <form className="modal__inputs">

                    <div className="modal__group">
                        <input type="text" onChange={onChangeUrl} className="url__input" required value={urlInput}/>
                        <span></span>
                        <label>{url}</label>
                    </div>
                    <div className="modal__group">
                        <input type="text" onChange={onChangeComment} className="url__input" required value={comment}/>
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