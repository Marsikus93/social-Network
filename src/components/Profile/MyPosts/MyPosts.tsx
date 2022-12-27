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
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: PostsType) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    let newPostElement = React.createRef<any>()
    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }
    return (<div className={s.postBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.myPosts}>
                {postsElements}
            </div>
        </div>
    )
}