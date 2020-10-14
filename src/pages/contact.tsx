import React, {ReactNode} from "react";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import bgImage from "../../static/images/ktr.jpg";

const styles = (theme: Theme) => createStyles({
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
    },
    topPaper: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
        padding: theme.spacing(6, 0),
    },
    form: {
        width: "100%",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        "&:hover": {
            boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        },
    },
    cardMedia: {
        height: theme.breakpoints.width("sm") * 0.75,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

const fields = [
    {
        id: "firstname",
        label: "First Name",
        multiline: false,
        xs: 6,
        sm: 4,
    },
    {
        id: "lastname",
        label: "Last Name",
        multiline: false,
        xs: 6,
        sm: 4,
    },
    {
        id: "email",
        label: "Email",
        multiline: false,
        xs: 12,
        sm: 8,
    },
    {
        id: "subject",
        label: "Subject",
        multiline: false,
        xs: 12,
        sm: 8,
    },
    {
        id: "message",
        label: "Message",
        multiline: true,
        xs: 12,
        sm: 8,
    },
];


interface ContactProps {
    classes: {
        container: string;
        topPaper: string;
        form: string;
        card: string;
        cardMedia: string;
        submit: string;
    };
}
interface ContactState {}

class Contact extends React.Component<ContactProps, ContactState> {

    public constructor(props: ContactProps) {
        super(props);
        this.state = {};
    }

    public render(): ReactNode {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Container className={classes.topPaper} component={Paper}>
                    <Typography align={"center"} variant={"h4"} component={"h1"} gutterBottom>
                        Billy Zou
                    </Typography>
                    <Typography align={"center"} variant={"h5"} component={"h2"} color={"textSecondary"}>
                        kotori@minamiktr.com
                    </Typography>
                </Container>
                <Container maxWidth={"lg"}>
                    <Grid container spacing={2} direction={"row"} alignItems={"center"}>
                        <Grid container={true} item xs={12} sm={8} spacing={1} className={classes.container}>
                            { fields.map((field, i: number): ReactNode => {
                                return (
                                    <Grid item xs={field.xs as any} sm={field.sm as any} key={i}>
                                        <TextField
                                            id={field.id}
                                            label={field.label}
                                            variant={"outlined"}
                                            margin={"normal"}
                                            multiline={field.multiline}
                                            required={true}
                                            fullWidth={true}
                                        />
                                    </Grid>
                                );
                            }) }
                            <Grid item xs={6} sm={8}>
                                <Button variant={"contained"} color={"primary"} endIcon={<SendIcon />} className={classes.submit}>
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.container}>
                            <Card elevation={2} className={classes.card}>
                                <CardMedia image={"static/images/kotori_avatar.png"} className={classes.cardMedia} />
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Contact);