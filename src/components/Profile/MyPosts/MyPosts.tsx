import React from 'react';
import s from "./myPosts.module.css"
import {Post} from "./Post/Post";

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type PostsType = {
    posts: Array<PostType>
}

export const MyPosts = (props:PostsType) => {
    let postsElements=
        props.posts.map(p=> <Post message={p.message} likeCount={p.likesCount}/>)
    return (<div className={s.postBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.myPosts}>
                {postsElements }
            </div>
        </div>
    )
}