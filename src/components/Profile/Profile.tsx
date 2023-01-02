import React from 'react';
// import s from "./profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../redux/state";
type ProfilePropsType={
    posts: PostsType
    addPost: (postMessage: string) => void

}
export const Profile:React.FC<ProfilePropsType> = (props ) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}