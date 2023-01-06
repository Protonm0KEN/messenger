/* eslint-disable */
import "./Modal.scss";
export const Modal = ({
  openModal,
  handleCloseModal,
  setUrl,
  url,
  setComment,
  comment,
  setImages,
  commentItem,
  setCommentItem,
  message,
}) => {
  const text = "Отправить картинку";
  const textUrl = "URL";
  const review = "Комментарий";
  const onChangeUrl = (e) => {
    setUrl(e.target.value);
  };
  const onChangeComment = (e) => {
    setComment(e.target.value);
  };
  const handlePushItem = (e) => {
    const ImageItems = {
      url,
      comment,
    };
    const TextItems = {
      message,
    };
    e.preventDefault();
    setCommentItem([...commentItem, comment]);
    if (url) {
      setImages((prev) => [...prev, url]);
    }
    console.log("Список картинок + комментарии: ", ImageItems, TextItems);
    handleCloseModal();
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className={`modal ${openModal ? "active" : ""}`}>
      <div className="modal__wrapper">
        <p className="modal-text">{text}</p>
        <form className="modal__inputs">
          <div className="modal__group">
            <input
              type="text"
              onChange={onChangeUrl}
              className="url__input"
              required
              value={url}
            />
            <span></span>
            <label>{textUrl}</label>
          </div>
          <div className="modal__group">
            <input
              type="text"
              onChange={onChangeComment}
              className="url__input"
              required
              value={comment}
            />
            <span></span>
            <label>{review}</label>
          </div>
        </form>
        <div className="modal__buttons">
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <button onClick={handleCloseModal} className="delete-button">
            ОТМЕНА
          </button>
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <button className="send-button" onClick={handlePushItem}>
            ОТПРАВИТЬ
          </button>
        </div>
      </div>
    </div>
  );
};
