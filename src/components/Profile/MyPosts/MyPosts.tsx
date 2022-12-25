import React from 'react';
import s from "./myPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (<div className={s.postBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.myPosts}>
                <Post message="Hi,how are you?" likeCount="0"/>
                <Post message="It's my first post" likeCount="12"/>
            </div>
        </div>
    )
}