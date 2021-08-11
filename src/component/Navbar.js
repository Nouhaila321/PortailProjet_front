import React from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import cap from '../photos/capT.png';

function Navbar() {

    const useStyles = makeStyles((theme) => ({

        title: {

            marginLeft: 10,
            marginTop: 10,
            color: '#1077b1'
        },
        searchIcon: {
            width: theme.spacing.unit * 4,
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'right',
            marginLeft: '35px',

        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: '750px',
                width: 'auto',
            },
        },
        inputRoot: {
            color: 'inherit',
            width: '100%',
        },
        inputInput: {
            paddingTop: theme.spacing.unit,
            paddingRight: theme.spacing.unit,
            paddingBottom: theme.spacing.unit,
            paddingLeft: theme.spacing.unit * 10,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: 120,
                '&:focus': {
                    width: 200,
                },
            },
        },
    }));

    const classes = useStyles();
    return (
        <AppBar color="#2596be">
            <Toolbar  >
                <Link color="inherit" href={`/`}>
                    <img className={classes.title} src={cap} alt="cap" />
                </Link>

                <div className={classes.grow} />
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Recherche.. "
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;