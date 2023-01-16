import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Dialogs = () => {

    let dialogsData = [
        {id:1,name:'Dymych'},
        {id:2,name:'Sveta'},
        {id:3,name:'Oleg'},
        {id:4,name:'Evgeny'},
        {id:5,name:'Alex'},
        {id:6,name:'Julia'},
    ]

    let messagesData = [
        {id:1,message:'Genious'},
        {id:2,message:'Genious'},
        {id:3,message:'Genious'},
        {id:4,message:'Genious'},
        {id:5,message:'Genious'},
        {id:6,message:'Genious'},
    ]

    return ( <div className={s.dialogs}>
        <div className={s.dialogsItems}>
        
            <Dialog ava='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' name = {dialogsData[0].name} id={dialogsData[0].id} />
            <Dialog ava='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' name = {dialogsData[1].name} id={dialogsData[1].id} />
            <Dialog ava='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' name = {dialogsData[2].name} id={dialogsData[2].id} />
            <Dialog ava='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' name = {dialogsData[3].name} id={dialogsData[3].id} />
        
        </div>

        <div className={s.messages}>
            <Message />
        </div>

    </div>
    )
}
export default Dialogs;