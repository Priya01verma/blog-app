import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import AllBlogs from "./AllBlogs";
import SelectedBlog from "./SelectedBlog";
import HomePage from "./HomePage";
import  PostsData  from "../postsData/PostsData";
import UserProfile from "./UserProfile";

const Navigatepage = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path ='/' component ={HomePage} />
                <Route exact path="/AllBlogs" component={AllBlogs} />
                <Route exact path="/AllBlogs/:post_id" component={SelectedBlog} />
                <Route exact path ="/PostsData" component={PostsData} />
                <Route exact path ="/UserProfile" component={UserProfile} />
            </Switch>
        </Fragment>
    );
};
export default Navigatepage;
