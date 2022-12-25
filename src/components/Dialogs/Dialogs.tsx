import React from 'react';
import s from "./dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: any) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
export const Dialogs = () => {
    return (<div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name={"Maryma"} id={"1"}/>
                    <DialogItem name={"Olya"} id={"2"}/>
                    <DialogItem name={"Vania"} id={"3"}/>
                    <DialogItem name={"Sania"} id={"4"}/>
                    <DialogItem name={"Tania"} id={"5"}/>
                    <DialogItem name={"Lesha"} id={"6"}/>
                </div>
                <div className={s.messages}>
                    <Message message={"Hi"}/>
                    <Message message={"How are you"}/>
                    <Message message={"Olala"}/>
                </div>
            </div>
        </div>
    )
}
