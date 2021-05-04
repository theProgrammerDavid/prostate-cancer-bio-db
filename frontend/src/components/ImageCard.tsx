import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import type { CardInterface } from '../types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        media: {
            height: 400,
            width: 'auto',
            objectFit: 'cover'
        },
        paper: {
            // padding: theme.spacing(3),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }
    }),
);

export default function MediaCard(props: CardInterface) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${process.env.PUBLIC_BASE_URL || 'http://localhost:4000'}${props.imagePath}`}
                    title={props.altTitle}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.caption}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
