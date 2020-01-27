import React, { useEffect } from "react";
import {
    createStyles,
    Typography,
    Theme,
    makeStyles,
    Box,
    Grid,
    Chip,
    Button
} from "@material-ui/core";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AllBlogs = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { blog = [] } = useSelector(({ blog }) => ({ blog: blog.blog }));
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                dispatch({ type: "ADD_BLOGS", value: response.data });
            });
    }, []);

    return (
        <Box p={2} mb={1}>
            {blog.map(userData => {
                return (
                    <Box p={2} mb={2} key={userData.id} className={classes.blogStyle}>
                    <Link className={classes.linkStyle} to={`/${userData.id}`}>
                        <div className={classes.dataStyle}>{userData.name}</div>
                    </Link>
                    </Box>
                );
            })}
        </Box>
    );
};

const useStyles = makeStyles(theme => {
    return createStyles({
        blogStyle: {
            border: "1px solid #979797",
            borderRadius: 5
        },
        dataStyle: {
            fontSize: 18,
            lineHeight: "24px",
            color: '#AC6D5F',
        },
        linkStyle:{
            textDecoration: 'none'
        }
    });
});
export default AllBlogs;
