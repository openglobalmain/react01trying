import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Dialogs = () => {
    return ( <div className={s.dialogs}>
        <div className={s.dialogsItems}>
        
            <Dialog ava='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' name='Nortan' />
            <Dialog ava='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' name='Ann' />
            <Dialog ava='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' name='Michele' />
            <Dialog ava='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' name='Max' />
        
        </div>

        <div className={s.messages}>
            <Message />
        </div>

    </div>
    )
}
export default Dialogs;