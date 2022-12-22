import React from "react";
import s from './Dialog.module.css';
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    return <div className={s.dialog}>
        <img src={props.ava}></img>
        <NavLink className={s.name}>{props.name}</NavLink>
        </div>
}
export default Dialog;