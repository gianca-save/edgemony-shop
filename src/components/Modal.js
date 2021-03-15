function Modal({isOpen, onClose, children}) {

    return isOpen ? (
        <div className='ProductModal'>
            <div className="overlay" onClick={() => onClose()}>
            </div>
            <button onClick={() => onClose()}>X</button>
            {children}
        </div>) : null
}

export default Modal;