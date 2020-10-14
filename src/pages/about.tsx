import React, {ReactNode} from "react";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const style = (theme: Theme) => createStyles({
    top: {
        marginTop: theme.spacing(8),
    },
    paper: {
        padding: theme.spacing(2),
    },
    desc: {
        marginTop: theme.spacing(1),
    },
});


const activities = [
    {
        time: "2018-08",
        activity: "c++",
        description: "Intro to programming",
    },
    {
        time: "2019-07",
        activity: "Python",
        description: "First encounter with client-server model; introduced to tcp/ws protocols",
    },
    {
        time: "2019-11",
        activity: "Node.js",
        description: "Asynchronous programming w/ heavy network usage",
    },
    {
        time: "2020-02",
        activity: "golang",
        description: "Go makes programming backend simpler",
    },
    {
        time: "2020-09",
        activity: "React",
        description: "Frontend design with react and material-ui",
    },
];

interface AboutProps {
    classes: {
        top: string;
        paper: string;
        desc: string;
    };
}
interface AboutState {}

class About extends React.Component<AboutProps, AboutState> {

    public constructor(props: AboutProps) {
        super(props);
        this.state = {};
    }

    public render(): ReactNode {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Container maxWidth={"md"}>
                    <Timeline className={classes.top} align={"alternate"}>
                        { activities.map((activity, index): ReactNode => {
                            return (
                                <TimelineItem key={index}>
                                    <TimelineOppositeContent>
                                        <Typography variant={"body2"} color={"textSecondary"}>{activity.time}</Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        { index !== activities.length-1 ? (
                                            <TimelineConnector />
                                        ) : <div></div> }
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={2} className={classes.paper}>
                                            <Typography align={"left"} variant={"h6"} gutterBottom>
                                                {activity.activity}
                                            </Typography>
                                            <Divider />
                                            <Typography align={"left"} className={classes.desc}>
                                                {activity.description}
                                            </Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                            );
                        }) }
                    </Timeline>
                </Container>
            </React.Fragment>
        );
    }
}

export default withStyles(style)(About);