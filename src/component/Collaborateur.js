import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import axios from 'axios'


import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import { makeStyles, styled } from '@material-ui/core/styles';


import CarteSite from "./CarteSite";

import dig1 from '../photos/1.svg';
import '../style/App.css';


const useStyles = makeStyles((theme) => ({

    root: {
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
        maxHeight: 180,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
    },
    images: {
        marginLeft: 40,
        marginTop: 35,
    },
    paper: {
        marginTop: 5,
        font: '1rem ubuntu-md',
        backgroundColor: '#f7f7f7',
        height: '34px',
        width: '300px',
    },
    titreProjet: {

        font: '2rem ubuntu-md',
        color: '#2b0a3d',
        marginLeft: '10%',
        marginTop: '2%'
    },
    projet: {
        textAlign: "justify",
        marginLeft: 35,
        marginRight: 20,
        marginTop: 15,
        marginBottom: 20,
        font: 'ubuntu-bd',

    },
    thematique: {
        marginLeft: 50,
        padding: theme.spacing(1),
    },
    cardscolab: {
        marginTop: 0,
        marginLeft: 35,
    },
    diag: {
        marginLeft: 40,
    },
    diagImg: {
        width: '200px',
        marginLeft: '20%'
    },
    diagTxt: {
        marginLeft: '25%',
        font: '1.1rem ubuntu-md',
        color: '#2b0a3d',
        textAlign: "center",
    },
    client: {
        marginLeft: 25,
        marginBottom: 10,
        font: '1.5rem ubuntu-md',
        color: '#2b0a3d',
        fontStyle: 'italic'
    },

    infoThematique: {
        marginLeft: 40,
        marginTop: 20,
        font: '1.3rem ubuntu-md',
        color: '#2b0a3d',

    },

}));

const ThematiqueButton = styled(Button)({

    textTransform: 'none',
    lineHeight: 1.5,
    backgroundColor: '#f7f7f7',
    marginRight: 5,
    marginTop: 4,
    font: '1.5 ubuntu-md',

});


function Collaborateur() {


    const classes = useStyles();
    const [collaborateur, setCollaborateur] = useState({});
    const [thematiques, setThematiques] = useState([]);


    const params = useParams();

    var idCollab = params.idCollab;

    useEffect(() => {

        axios.get(`https://localhost:44378/api/Collaborateurs/${idCollab}`)
            .then(res => {
                setCollaborateur(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    return (

        <div>
            <CarteSite />
            <div >
                <Typography className={classes.titreProjet} variant="h5" >
                   {collaborateur.prenom + " " + collaborateur.nom}
                </Typography>
            </div>
            <div class="flex">
                <div class="flex1">
                    <div className={classes.projet}>
                        <text >
                            {collaborateur.description}
                        </text>
                    </div>
                    

                </div>

                <div class="flex2">
                    <div className={classes.diag} >
                        <img className={classes.diagImg} src={dig1} alt="dig1" />
                        <text className={classes.diagTxt}> Répartition des projets sur l'années</text>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Collaborateur;