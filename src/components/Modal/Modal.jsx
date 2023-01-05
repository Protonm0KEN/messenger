import './Modal.scss'

export const Modal = ({openModal, handleCloseModal, setUrl, url, setComment, comment, images, setImages}) => {
    const text = 'Отправить картинку'
    const textUrl = 'URL'
    const review = 'Комментарий'
    const onChangeUrl = (e) => {
        setUrl(e.target.value)
    }
    const onChangeComment = (e) => {
        setComment(e.target.value)
    }
    const handlePushItem = (e) => {
        e.preventDefault()
        if (url) {
            setImages(prev => [...prev, url])
        }
        console.log('Список картинок', images)
        handleCloseModal()
    }
    return (
        <div className={`modal ${openModal ? 'active' : 'noactive'}`}>
            <div className="modal__wrapper">
                <p className="modal-text">{text}</p>
                <form className="modal__inputs">

                    <div className="modal__group">
                        <input type="text" onChange={onChangeUrl} className="url__input" required value={url}/>
                        <span></span>
                        <label>{textUrl}</label>
                    </div>
                    <div className="modal__group">
                        <input type="text" onChange={onChangeComment} className="url__input" required value={comment}/>
                        <span></span>
                        <label>{review}</label>
                    </div>
                </form>
                <div className="modal__buttons">
                    <button onClick={handleCloseModal} className="delete-button">ОТМЕНА</button>
                    <button  className="send-button" onClick = {handlePushItem}>ОТПРАВИТЬ</button>
                </div>
            </div>
        </div>
    );
}