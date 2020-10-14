import React, {ReactNode} from "react";
import {Link as RouterLink} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import GithubIcon from "@material-ui/icons/Github";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";


const styles = (theme: Theme) => createStyles({
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 5,
    },
    offset: theme.mixins.toolbar,
});


interface TopbarProps {
    pageTitle: string;
    classes: {
        title: string;      // -> styles.title
        menuButton: string; // -> styles.menuButton
        offset: string;     // -> styles.offset
    };
}
interface TopbarState {}

class Topbar extends React.Component<TopbarProps, TopbarState> {

    public constructor(props: TopbarProps) {
        super(props);
        this.state = {};
    }

    public render(): ReactNode {
        const { classes } = this.props;     // -> TopbarProps
        return (
            <React.Fragment>
                <AppBar color={"default"} position={"fixed"}>
                    <Toolbar>
                        <Tooltip title={"Homepage"}>
                            <Link component={RouterLink} to={"/"}>
                                <IconButton>
                                    <HomeIcon />
                                </IconButton>
                            </Link>
                        </Tooltip>
                        <Typography variant={"h6"} color={"inherit"} className={classes.title} noWrap>
                            {this.props.pageTitle}
                        </Typography>

                        <Tooltip title={"Github Repository"}>
                            <IconButton href={"https://github.com/Billyzou0741326"}>
                                <GithubIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={"About"}>
                            <Link component={RouterLink} to={"/about"}>
                                <IconButton>
                                    <InfoIcon />
                                </IconButton>
                            </Link>
                        </Tooltip>
                        <Tooltip title={"Contact"}>
                            <Link component={RouterLink} to={"/contact"}>
                                <IconButton>
                                    <ContactSupportIcon />
                                </IconButton>
                            </Link>
                        </Tooltip>
                        <Link component={RouterLink} to={"/login"}>
                            <Button variant={"outlined"}>Sign in</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                <div className={classes.offset} />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Topbar);