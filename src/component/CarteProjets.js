import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {  Redirect } from 'react-router-dom';


import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import bank from '../photos/1.jpg';
import train from '../photos/train.jpg'
import bateau from '../photos/bateau.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        marginLeft: 20,
        marginRight: 20,
    },
    media: {
        height: 140,
    },
}));


function CarteProjets() {

    const classes = useStyles();
    const onSubmit = () => {
        <Redirect to="/posts/" />
    }

    return (
        <Grid container spacing={24}>
            
            <Grid item md={4} >
                <Link color="inherit" href={`projets/${'ferroviaire'}`} >
                    <Card className={classes.root}>
                        <CardActionArea >
                            <CardMedia
                                className={classes.media}
                                image={train}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Projets Ferroviaires
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>

            <Grid item md={4}>
                <Link href={`projets/${'bancaire'}`} >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={bank}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Projets Bancaires
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>

            <Grid item md={4}>
                <Link href={`projets/${'maritime'}`} >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={bateau}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Projets Maritimes
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>

        </Grid>

    );
}

export default CarteProjets;