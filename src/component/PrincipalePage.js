import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import cap from '../photos/header1.jpg';

import CarteProjets from '../component/CarteProjets';

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        marginTop: 90,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${cap})`,
    },

    mainFeaturedPostContent: {
        marginLeft: 80,
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    flex2: {
        marginTop: 30,
        marginLeft: 50,
        marginRight: 20,
    }
}));

function PrincipalePage() {

    const classes = useStyles();

    return (
        <div >
            <div >
                <Paper className={classes.mainFeaturedPost} >
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturedPostContent}>
                                <Typography color="inherit" gutterBottom>
                                    <Box textAlign="center" fontWeight="fontWeightBold" fontSize={46} m={1}>
                                        Portail des projets
                                    </Box>
                                    <Box textAlign="right" fontStyle="oblique" fontSize="h7.fontSize" m={1}>
                                        Capgemini BREST
                                    </Box>
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
            <div class={classes.flex2}>
                <CarteProjets />
            </div>
        </div>
    );
}

export default PrincipalePage;