import React from 'react';
import Modal from 'react-modal';
import style from './ReactModal.module.css';
import './ReactModal.css';

let test = {

        base: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'red',
            opacity: 1,

        },



}

const ReactModal = ({isOpen, onAfterOpen, onRequestClose, children}) => {
    return (
        <Modal
                className={style.Modal}
                overlayClassName={style.Overlay}
               isOpen={isOpen}
                closeTimeoutMS={600}
               onRequestClose={onRequestClose}

        >

            {children}

        </Modal>
    );
};


export default ReactModal;