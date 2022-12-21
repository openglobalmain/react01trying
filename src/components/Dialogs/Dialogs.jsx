import React from "react";
import s from './Dialogs.module.css';

const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog}>CopyName</div>
            <div className={s.dialog}>CopyName</div>
            <div className={s.dialog}>CopyName</div>
            <div className={s.dialog}>CopyName</div>
        </div>
        <div className={s.messages}>
        <div className={s.message}>lol</div>
        <div className={s.message}>absolutely</div>
        <div className={s.message}>epfpfpfpf</div>
        </div>

    </div>
}
export default Dialogs;