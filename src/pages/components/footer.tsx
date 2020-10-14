import React, {ReactNode} from "react";
import {Link as RouterLink} from "react-router-dom";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";


const styles = (theme: Theme) => createStyles({
    footer: {
        padding: theme.spacing(6, 0),
    }
});

interface FooterProps {
    classes: {
        footer: string;
    };
}
interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {

    public constructor(props: FooterProps) {
        super(props);
        this.state = {};
    }

    public render(): ReactNode {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <footer className={classes.footer}>
                    <Typography variant={"body2"} color={"textSecondary"} align={"center"}>
                        {"Copyright © "}
                        <Link color={"inherit"} component={RouterLink} to={"/"}>
                            kotori~
                        </Link>
                        {" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </footer>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Footer);