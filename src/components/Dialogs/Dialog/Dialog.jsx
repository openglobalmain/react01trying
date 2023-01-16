import React from "react";
import s from './Dialog.module.css';
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    let name = props.name;
    return <div className={s.dialog}>
        <img src={props.ava}></img>
        <NavLink className={s.name} to={'/dialogs/'+props.id}>{props.name}</NavLink>
        </div>
}
export default Dialog;
