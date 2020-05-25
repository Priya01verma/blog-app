import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    createStyles,
    Typography,
    makeStyles,
    Box,
} from "@material-ui/core";
import axios from "axios";

const SelectedBlog = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { userSelectedBlog = {} } = useSelector(({ userSelectedBlog }) => ({
        userSelectedBlog: userSelectedBlog.userSelectedBlog
    }));
    let id = props.match.params.post_id;
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                dispatch({ type: "SELECTED_BLOGS", value: response.data });
            });
    }, []);
    return (
        <Box className={classes.boxStyle} p={3} m={3}>
            <Typography varient="h3" className={classes.textStyle}>
                The email of the particular id is: {userSelectedBlog.email} and the username of the client is: {userSelectedBlog.username}
            </Typography>
        </Box>
    );
};
const useStyles = makeStyles(theme => {
    return createStyles({
        boxStyle: {
            border: "1px solid #979797",
            textAlign: "center",
            boxShadow: "5px 10px 18px #888888"
        },
        textStyle: {
            color: "hotpink"
        }
    });
});
export default SelectedBlog;
