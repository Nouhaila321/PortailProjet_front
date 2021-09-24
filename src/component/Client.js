import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import axios from 'axios';

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import { withStyles, makeStyles, styled } from '@material-ui/core/styles';


import CarteSite from "./CarteSite";

import dig1 from '../photos/1.svg';
import '../style/App.css';


const useStyles = makeStyles((theme) => ({

    root: {
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
        maxHeight: 180,
        width: "100%",
        marginTop: "5%",
        marginLeft: 50,
        maxWidth: "90%"
    },

    container: {
        maxHeight: 600
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


function Client() {

    const classes = useStyles();
    const [client, setClient] = useState({});
    const [projets, setProjets] = useState([]);
    const [thematiques, setThematiques] = useState([]);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: '#13abdc',
            color: '#f7f7f7',
            fontSize: 15
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);


    const params = useParams();

    var idC = params.idC;

    useEffect(() => {

        axios.get(`https://localhost:44378/api/Clients/${idC}`)
            .then(res => {
                setClient(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`https://localhost:44378/api/ClientThematiques/${idC}`)
            .then(resA => {
                setThematiques(resA.data)
            })
            .catch(errA => {
                console.log(errA)
            })
        axios.get(`https://localhost:44378/api/Projets/Client_${idC}`)
            .then(resZ => {
                setProjets(resZ.data)
            })
            .catch(errZ => {
                console.log(errZ)
            })
    }, [])

    return (

        <div>
            <CarteSite />
            <div >
                <Typography className={classes.titreProjet} variant="h5" >
                    Client : {client.nom_Client}
                </Typography>
            </div>
            <div class="flex">
                <div class="flex1">
                    <div className={classes.projet}>
                        <text >
                            {client.description}
                        </text>
                    </div>

                    <Paper className={classes.root}>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell
                                            
                                        >
                                            Projet
                                        </StyledTableCell>
                                        <StyledTableCell
                                            
                                        >
                                            Date début
                                        </StyledTableCell>
                                        <StyledTableCell
                                            
                                        >
                                            Date Fin
                                        </StyledTableCell>
                                        <StyledTableCell
                                            
                                        >
                                            Description
                                        </StyledTableCell>


                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {projets
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((projet) => {

                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={projet.id_Projet}  >

                                                    <TableCell  >
                                                        {projet.libelle}
                                                    </TableCell>

                                                    <TableCell  >

                                                    </TableCell>

                                                    <TableCell >
                                                       
                                                    </TableCell>

                                                    <TableCell  >
                                                        {projet.description.split(":")[0]}
                                                    </TableCell>

                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 20]}
                            component="div"
                            count={projets.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>




                </div>

                <div class="flex2">
                    <div className={classes.diag} >
                        <img className={classes.diagImg} src={dig1} alt="dig1" />
                        <text className={classes.diagTxt}> Répartition des projets du client</text>
                    </div>

                    <div className={classes.infoThematique}>
                        <Typography variant="h7" >
                            Thématiques clients:
                        </Typography>
                    </div>
                    <div className={classes.thematique}>

                        {thematiques.map((thematique) => (
                            <ThematiqueButton variant="outlined" className={classes.button}>
                                {thematique.nom_Thematique}
                            </ThematiqueButton>
                        ))}

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Client;