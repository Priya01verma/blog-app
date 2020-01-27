import React, { Component } from "react";
import HomePage from "./HomePage";
import NavigatePage from "./NavigatePage";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Typography, makeStyles,createStyles } from "@material-ui/core";

const MainPage = () => {
    const classes = useStyles();
    return (
        <Router>
            <Typography variant="h4" className={classes.headerStyle}>
                Welcome to Priya Blogs
            </Typography>
            <NavigatePage />
        </Router>
    );
};
const useStyles = makeStyles(theme => {
    return createStyles({
        headerStyle: {
            borderBottom: "1px solid #979797",
            padding:16
        }
    });
});
export default MainPage;
