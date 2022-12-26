import React from 'react';
import s from "./../dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../index";

const DialogItem = (props: DialogType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;
