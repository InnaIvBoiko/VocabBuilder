import Modal from 'react-modal';
import css from './ModalPopUp.module.css';

Modal.setAppElement('#root');

const customStyles = {
    overlay: {
        background: 'rgba(18, 20, 23, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default function ModalPopUp({ state,
    closeModal,
    children }) {
    return (
        <Modal
            isOpen={state}
            onRequestClose={closeModal}
            style={customStyles}
            className={css.modal}
        >
            <button className={css.closeBtn} onClick={closeModal}>
                <svg className={css.closeIcon} aria-hidden='true'>
                    <use xlinkHref={'/assets/sprite.svg#icon-close'} />
                </svg>
            </button>
            
            {children}
        </Modal>
    );
}