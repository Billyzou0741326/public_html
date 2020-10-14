import React, {ReactNode} from "react";
import Button from "@material-ui/core/Button";
import CheckBox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";


const styles = (theme: Theme) => createStyles({
    paper: {
        marginTop: theme.spacing(6),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

interface LoginFormProps {
    classes: {
        paper: string;
        form: string;
        submit: string;
    };
}
interface LoginFormState {
    showPassword: boolean;
}

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {

    public constructor(props: LoginFormProps) {
        super(props);
        this.state = {
            showPassword: false,
        };
        this.handleShowPassword = this.handleShowPassword.bind(this);
    }

    private handleShowPassword(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            showPassword: e.target.checked,
        });
    }

    public render(): ReactNode {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Container component={"main"} maxWidth={"xs"}>
                    <div className={classes.paper}>
                        <Typography variant={"h5"} component={"h1"}>
                            Sign in
                        </Typography>
                        <form className={classes.form}>
                            <TextField
                                variant={"outlined"}
                                margin={"normal"}
                                required={true}
                                fullWidth
                                id={"email"}
                                label={"Email Address"}
                                name={"email"}
                                autoFocus
                            />
                            <TextField
                                variant={"outlined"}
                                margin={"normal"}
                                required={true}
                                fullWidth
                                type={this.state.showPassword ? "text" : "password"}
                                id={"password"}
                                label={"Password"}
                                name={"password"}
                            />
                            <FormControlLabel
                                control={
                                    <CheckBox
                                        checked={this.state.showPassword}
                                        onChange={this.handleShowPassword}
                                    />
                                }
                                label={"Show Password"}
                            />
                            <Button
                                type={"submit"}
                                fullWidth
                                variant={"contained"}
                                color={"primary"}
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                        </form>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(LoginForm);