import React from 'react';
import s from './profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (<div className={s.content}>
        <div><img alt=""
                  src="https://tortodel.com.ua/image/cache/catalog/%20Kartynky/Mylty/Pingvin%201-700x700.jpg"/>
        </div>
        <div>Avatar+description</div>
    <MyPosts/>
    </div>
)
}