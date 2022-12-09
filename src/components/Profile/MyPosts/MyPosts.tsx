import React from 'react';
import s from "./myPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (<div> My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.myposts}>
                <Post message={"Hi,how are you?"}/>
                <Post message={"It's my first post"}/>
            </div>
        </div>
    )
}