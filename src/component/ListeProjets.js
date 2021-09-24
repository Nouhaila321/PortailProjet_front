import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import CarteSite from './CarteSite';

import cap from '../photos/header1.jpg';

import { useHistory } from "react-router-dom";


const columns = [
    { id: "libelle", label: "Libelle", align: "centre", minWidth: 70 },
    { id: "description", label: "Description", minWidth: 150 },

    {
        id: "em",
        label: "EM",
        minWidth: 70,
        align: "centre",
        format: (value) => value.toLocaleString("en-US")
    },
    {
        id: "domaine",
        label: "Domaine",
        minWidth: 70,
        align: "centre",
        format: (value) => value.toLocaleString("en-US")
    },
    {
        id: "statut",
        label: "Statut",
        minWidth: 70,
        align: "centre",
        format: (value) => value.toFixed(2)
    }
];


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginTop: "3%",
    },
    container: {
        maxHeight: 600
    },
    
    table: {
        marginTop: 50,
        marginRight: 90,
        marginLeft: 90 
    }

}));

function ListeProjets() {

    var type = window.location.href.split('/').filter(Boolean).pop();
    const [projets, setProjets] = useState([]);
    const [projetType, setprojetType] = useState("");
    const [id_Client, setid_Client] = useState("");
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const history = useHistory();

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

    useEffect(() => {

        var url;

        if (type === "projets") {
            url = `https://localhost:44378/api/Projets`
            setprojetType(" ")

        } else {
            url = `https://localhost:44378/api/Projets/${type}`
            setprojetType(type)
        }
        axios.get(url)
            .then(res => {
                setProjets(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <div>
            <CarteSite />
            <div class='table' className={classes.table}>

                <Typography color="inherit" gutterBottom>
                    <Box textAlign="center" fontWeight="fontWeightBold" fontSize={36} m={1}>
                        Liste des projets: {" " + projetType.charAt(0).toUpperCase() + projetType.slice(1)}
                    </Box>
                </Typography>

                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <StyledTableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </StyledTableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {projets
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((projet) => {

                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={projet.id_Projet} onClick={() => history.push(`/projet/${projet['id_Projet']}/${projet['id_Client']}`)} >

                                                <TableCell  >
                                                    {projet.libelle}
                                                </TableCell>

                                                <TableCell  >
                                                    {projet.description.split(":")[0]}
                                                </TableCell>

                                                <TableCell >
                                                    {projet.em}
                                                </TableCell>

                                                <TableCell  >
                                                    {projet.domaine.charAt(0).toUpperCase() + projet.domaine.slice(1)}
                                                </TableCell>

                                                <TableCell  >
                                                    {projet.statut}
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

        </div>

    );
}

export default ListeProjets;