import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type MessageType = {
    id: number,
    message: string
}
export type DialogType = {
    id: number,
    name: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type AppType = {
    posts: Array<PostType>,
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}
let posts = [
    {id: 1, message: "Hi,how are you", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11}
]
let dialogs = [
    {id: 1, name: "Lena"},
    {id: 2, name: "Ann"},
    {id: 3, name: "Dima"},
    {id: 4, name: "Inna"},
    {id: 5, name: "Piggy"},
    {id: 6, name: "Tony"}
]
let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you"},
    {id: 3, message: "Hi"},
    {id: 4, message: "Hi"},
    {id: 5, message: "Hi"},
    {id: 6, message: "Hi"}
]
ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);