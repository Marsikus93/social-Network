import React from 'react';
import s from "./myPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../redux/state";


export type MyPostsPropsType = {
    posts: PostsType
    addPost: (postMessage: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current?.value)
            newPostElement.current.value = ""
        }
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