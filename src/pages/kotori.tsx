import React, {ReactNode} from "react";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";

import bgImage from "../../static/images/ktr.jpg";

const styles = (theme: Theme) => createStyles({
    main: {
        marginTop: 0,
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        backgroundPosition: "cover",
        backgroundAttachment: "fixed",
    },
});

interface KotoriProps {
    classes: {
        main: string;
    };
}
interface KotoriState {}

class Kotori extends React.Component<KotoriProps, KotoriState> {

    public constructor(props: KotoriProps) {
        super(props);
        this.state = {};
    }

    public render(): ReactNode {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.main} />
            </React.Fragment>
        );
    }

}

export default withStyles(styles)(Kotori);