import React from 'react';
import s from "./dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../redux/state";
type DialogsPropsType={
    state:DialogsPageType
}
export const Dialogs:React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map((m) => <Message message={m.message}/>)
    return (<div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}
