import React, { Fragment } from "react";
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
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const HomePage = props => {
    const classes = useStyles();
    return (
        <Fragment>
            <Box m={1} >
                <Link to="/AllBlogs">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Blogs
                    </Button>
                </Link>
            </Box>
            <div className={classes.cover}></div>
        </Fragment>
    );
};

const useStyles = makeStyles(theme => {
    return createStyles({
        root: { width: "100%" },
        cover: {
            height: "80vh",
            marginTop: "24px",
            backgroundImage: `url(https://www.favcy.com/info/images/favcy_main_page.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative"
        },
        button:{
            marginTop: 12
        }
    });
});
export default HomePage;
