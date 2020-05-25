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
            <Box display={"flex"} justifyContent={"center"} m={1}>
                <Box>
                    <Link to="/AllBlogs">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Blogs
                        </Button>
                    </Link>
                </Box>
                <Box ml={1.5}>
                    <Link to="/PostsData">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Posts Blogs
                        </Button>
                    </Link>
                </Box>
                <Box ml={1.5}>
                    <Link to="/UserProfile">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Profile Form
                        </Button>
                    </Link>
                </Box>
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
        button: {
            marginTop: 12
        }
    });
});
export default HomePage;
