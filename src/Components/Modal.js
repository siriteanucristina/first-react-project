import "../Style/modal.css";

const Modal = ({ show, close }) => {
  return (
    <>
      {show ? (
        <div className="modal-container">
          <div className="modal">
            <header className="modal-header">
              <h2 className="modal-header__title">Modal Title</h2>
              <button className="close" onClick={() => close()}>
                Close
              </button>
            </header>

            <main className="modal-content">This is modal content</main>

            <footer className="modal-footer">
              <button className="modal-submit">Submit</button>
              <button className="modal-close" onClick={() => close()}>
                Cansel
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
