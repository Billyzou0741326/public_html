import React, {ReactNode} from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import NoSsr from "@material-ui/core/NoSsr";
import Pagination from "@material-ui/lab/Pagination";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";

import {Meta, imagesByIndex} from "../../api/api";


const styles = (theme: Theme) => createStyles({
    paperVertical: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    paperHorizontal: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirectin: "row",
        alignItems: "center",
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    cardGrid: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
            boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        },
    },
    cardMedia: {
        height: 300,
    },
});

interface AlbumProps {
    classes: {
        paperVertical: string;
        paperHorizontal: string;
        avatar: string;
        cardGrid: string;
        card: string;
        cardMedia: string;
    };
}
interface AlbumState {
    currentIndex: number;
    metaList: Meta[];
}

class Album extends React.Component<AlbumProps, AlbumState> {

    private size: number;

    public constructor(props: AlbumProps) {
        super(props);
        this.state = {
            currentIndex: 0,
            metaList: [],
        };
        this.size = 12;
    }

    public componentDidMount() {
        this.getAlbum();
    }

    private getAlbum() {
        const size = this.size;
        const future = imagesByIndex(this.state.currentIndex, size);
        if (future instanceof Promise) {
            future.then((metaList: Meta[]): void => {
                const i = this.state.currentIndex;
                const l = this.state.metaList;
                this.setState({
                    currentIndex: i + metaList.length,
                    metaList: l.concat(metaList),
                });
            }).catch((error): void => {
                console.log(error)
            });
            return;
        }
        const i = this.state.currentIndex;
        const l = this.state.metaList;
        this.setState({
            currentIndex: i + future.length,
            metaList: l.concat(future),
        });
    }

    public render(): ReactNode {
        const { classes } = this.props;
        const metaList = this.state.metaList;
        return (
            <React.Fragment>
                <Container component={"main"} maxWidth={"sm"}>
                    <div className={classes.paperVertical}>
                        <Avatar src={"static/images/kotori_avatar.png"} alt={"Minami Kotori"} className={classes.avatar} />
                        <Grid container spacing={3} justify={"center"} alignItems={"center"} style={{marginTop: 2}}>
                            <Grid item>
                                <Link target={"_blank"} href={"https://reddit.com/r/LegendaryMinalinsky/"}>
                                    <Tooltip title={"Reddit"}>
                                        <Avatar
                                            src={"static/icons/icons8-reddit.svg"}
                                            alt={"Reddit Community"}
                                        />
                                    </Tooltip>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body1"} color={"textSecondary"}>
                                    Minami Kotori~
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
                <Container maxWidth={"md"} className={classes.cardGrid}>
                    <Grid container spacing={4}>
                        {(
                            metaList.map((meta: Meta): ReactNode => {
                                return (
                                    <Grid item key={meta.Name} xs={12} sm={6} md={4}>
                                        <CardActionArea href={meta.Uri}>
                                            <Card className={classes.card}>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image={meta.Uri}
                                                    component={"img"}
                                                />
                                            </Card>
                                        </CardActionArea>
                                    </Grid>
                                )
                            })
                        )}
                        {(
                            metaList.length > 0 ? (
                                <NoSsr defer={true}>
                                    <Pagination count={1} color={"primary"} size={"large"} />
                                </NoSsr>
                            ) : null
                        )}
                    </Grid>
                </Container>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Album);