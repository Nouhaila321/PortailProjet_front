import React, { useState, useEffect } from "react";
import { useParams , Link} from 'react-router-dom';

import axios from 'axios'


import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Card from "@material-ui/core/Card";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles, styled } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';

import CarteSite from "./CarteSite";

import dig1 from '../photos/1.svg';
import '../style/App.css';


const collab = ['Nouhaila', 'ESSAHIH', 'Nouhaila', 'ESSAHIH', 'Nouhaila', 'ESSAHIH', 'Nouhaila', 'ESSAHIH'];
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
        marginBottom: '20px',
        font: '2.5rem ubuntu-md',
        color: '#2b0a3d',
        textAlign: "center",
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
        marginRight: '8px',
    },
    diagTxt: {
        font: '1rem ubuntu-bd',
        marginLeft: '8%',
        marginRight: '8%'
    },
    client: {
        marginLeft: 25,
        marginBottom: 10,
        font: '1.5rem ubuntu-md',
        color: '#2b0a3d',
        fontStyle: 'italic'
    },

    info: {
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
const ImageListItemBarSTYLE = styled(ImageListItemBar)({
    height: 30
});

const ListSTYLE = styled(List)({
    paddingTop: 0,
    paddingBottom: 0,
});


function Projet() {


    const classes = useStyles();
    const [projet, setProjet] = useState({});
    const [client, setClient] = useState({});
    const [thematiques, setThematiques] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [collaborateurs, setCollaborateurs] = useState([]);
    const [images, setImages] = useState([]);

    const params = useParams();

    var idProjet = params.idP;;
    var idC = params.idC;

    useEffect(() => {

        axios.get(`https://localhost:44378/api/Projets/${idProjet}/${idC}`)
            .then(res => {
                setProjet(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`https://localhost:44378/api/ProjetThematiques/${idProjet}/${idC}`)
            .then(resA => {
                setThematiques(resA.data)
            })
            .catch(errA => {
                console.log(errA)
            })

        axios.get(`https://localhost:44378/api/ProjetTechnologies/${idProjet}/${idC}`)
            .then(resQ => {
                setTechnologies(resQ.data)
            })
            .catch(errQ => {
                console.log(errQ)
            })
        axios.get(`https://localhost:44378/api/ProjetGaleries/${idProjet}/${idC}`)
            .then(resT => {
                setImages(resT.data)
            })
            .catch(errT => {
                console.log(errT)
            })
        axios.get(`https://localhost:44378/api/Clients/${idC}`)
            .then(resC => {
                setClient(resC.data)
            })
            .catch(errC => {
                console.log(errC)
            })
        axios.get(`https://localhost:44378/api/CollaborateurActivites/projet/FR03CP`)
            .then(resP => {
                setCollaborateurs(resP.data)
            })
            .catch(errP => {
                console.log(errP)
            })

    }, [])

    return (

        <div>
            <CarteSite />
            <div >
                <Typography className={classes.titreProjet} variant="h5" >
                    Projet : {projet.libelle} 
                </Typography>
            </div>
            <div class="flex">
                <div class="flex1">
                    <div className={classes.client}>
                        <Typography variant="h6" >
                            Client du Projet  : <Link to={`/client/${projet['id_Client']}`}> {client.nom_Client} </Link>
                        </Typography>
                    </div>
                    <div className={classes.projet}>
                        <text >
                            {projet.description}
                        </text>
                    </div>

                    <div className={classes.images}>
                        <ImageList cols={4}>
                            {images.map((image) => (
                                <ImageListItem key={image.chemin}>
                                    <img
                                        alt={image.titre}
                                        src={image.chemin}
                                    />
                                    <ImageListItemBarSTYLE
                                        subtitle={image.titre}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </div>

                <div class="flex2">
                    <div className={classes.info}>
                        <Typography variant="h7" >
                            Statistiques générales:
                        </Typography>
                    </div>
                    <div className={classes.diag} >
                        <img className={classes.diagImg} src={dig1} alt="dig1" />
                        <img className={classes.diagImg} src={dig1} alt="dig1" />
                        <text className={classes.diagTxt}> Description graphe 1  </text>
                        <text className={classes.diagTxt} > Description graphe 2  </text>
                    </div>
                    <div className={classes.info}>
                        <Typography variant="h7" >
                            Thématiques:
                        </Typography>
                    </div>
                    <div className={classes.thematique}>

                        {thematiques.map((thematique) => (
                            <ThematiqueButton variant="outlined" className={classes.button}>
                                {thematique.nom_thematique}
                            </ThematiqueButton>
                        ))}

                    </div>
                    <div className={classes.info}>
                        <Typography variant="h7" >
                            Technologies:
                        </Typography>
                    </div>
                    <div className={classes.thematique}>

                        {technologies.map((technologie) => (
                            <ThematiqueButton variant="outlined" className={classes.button}>
                                {technologie.nom_technologie}
                            </ThematiqueButton>
                        ))}

                    </div>
                    <div className={classes.info}>
                        <Typography variant="h7" >
                            Collaborateurs:
                        </Typography>
                    </div>
                    <div className={classes.cardscolab}>
                        <ListSTYLE className={classes.root} >
                            <li className={classes.listSection}>
                                <ul className={classes.ul}>
                                    {collaborateurs.map((collaborateur) => (
                                        <ListItem >
                                            <Card className={classes.paper} >
                                                <Typography variant="h7" style={{ marginTop: '10px', }}>
                                                    <PersonIcon />
                                                    
                                                    <Link to={`/Collaborateur/${collaborateur.id_Collaborateur}`}> {collaborateur.prenom + " " + collaborateur.nom} </Link>
                                                </Typography>
                                            </Card>
                                        </ListItem>
                                    ))}
                                </ul>
                            </li>
                        </ListSTYLE>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projet;