import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/" element={<Profile state={props.state.profilePage} addPost={props.addPost}/>}>
                            <Route path="/profile" element={<Profile posts={props.state.profilePage}
                                                                     addPost={props.addPost}/>}/>
                        </Route>
                        <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;
