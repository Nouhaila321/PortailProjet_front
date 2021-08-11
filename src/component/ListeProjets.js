import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from "@material-ui/core/styles";
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

const columns = [
    { id: "libelle", label: "Libelle", align: "centre", minWidth: 100 },
    { id: "description", label: "Description", minWidth: 250 },
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
        marginTop: "5%",
    },
    container: {
        maxHeight: 600
    },

}));

function ListeProjets() {

    var type = window.location.href.split('/').filter(Boolean).pop();
    const [projets, setProjets] = useState([]);
    const [projetType, setprojetType] = useState("");
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        
        var url ; 
    
        if ( type == "projets"){
             url = `https://localhost:44378/api/Projets`
             setprojetType(" ")
             
        }else{
            url = `https://localhost:44378/api/Projets/${type}`
            setprojetType(type)
        }
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setProjets(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div class='table'>

            <Typography color="inherit" gutterBottom>
                <Box textAlign="center" fontWeight="fontWeightBold" fontSize={46} m={1}>
                    Liste des projets { " " + projetType }
                </Box>
            </Typography>

            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {projets
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((projet) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={projet.id_Projet}>
                                            {columns.map((column) => {
                                                const value = projet[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === "number"
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
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
    );
}

export default ListeProjets;