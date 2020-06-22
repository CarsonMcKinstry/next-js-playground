import React, { useState, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom'
import { v4 as uuid } from 'uuid';

export const MODAL_ROOT_ID = uuid();

// export const ModalRootContext = React.createContext();


export const ModalRoot = () => {
    console.log(MODAL_ROOT_ID);
    return <div id={MODAL_ROOT_ID}></div>
}

export const Modal = () => {

    const [modalRoot,  setModalRoot] = useState();


    useEffect(() => {
        const root = document.getElementById(MODAL_ROOT_ID);
        console.log(MODAL_ROOT_ID)

        setModalRoot(root);
    })

    if (!modalRoot) return null

    return createPortal(
        <p>I should end up in the portal</p>,
        modalRoot
    )
}