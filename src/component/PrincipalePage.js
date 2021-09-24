import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import CarteProjets from '../component/CarteProjets';
import CarteSite from './CarteSite';

const useStyles = makeStyles((theme) => ({

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
            <CarteSite />
            <div class={classes.flex2}>
                <CarteProjets />
            </div>
        </div>
    );
}

export default PrincipalePage;