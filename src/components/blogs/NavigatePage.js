import React, { Fragment } from "react";
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllBlogs from "./AllBlogs";
import SelectedBlog from "./SelectedBlog";
import HomePage from "./HomePage";

const Navigatepage = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path ='/' component ={HomePage} />
                <Route path="/AllBlogs" component={AllBlogs} />
                <Route path="/:post_id" component={SelectedBlog} />
            </Switch>
        </Fragment>
    );
};
export default Navigatepage;
