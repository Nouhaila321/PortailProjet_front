import React from "react";

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

import dig1 from '../photos/1.svg';
import '../style/App.css';

const api = axios.create({
    baseURL: `https://localhost:44378/api/Projets`
  })

const itemData = [
    {
        img: 'https://simg.nicepng.com/png/small/102-1021002_picture-images-photos-polaroid-comments-triangle.png',
        title: 'Breakfast',
        author: '@bkristastucchio',
        featured: true,
    },
    {
        img: 'https://simg.nicepng.com/png/small/102-1021002_picture-images-photos-polaroid-comments-triangle.png',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://simg.nicepng.com/png/small/102-1021002_picture-images-photos-polaroid-comments-triangle.png',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://simg.nicepng.com/png/small/102-1021002_picture-images-photos-polaroid-comments-triangle.png',
        title: 'Coffee',
        author: '@nolanissac',

    },
    {
        img: 'https://simg.nicepng.com/png/small/102-1021002_picture-images-photos-polaroid-comments-triangle.png',
        title: 'Hats',
        author: '@hjrc33',

    },
    {
        img: 'https://simg.nicepng.com/png/small/102-1021002_picture-images-photos-polaroid-comments-triangle.png',
        title: 'Honey',
        author: '@arwinneil',
        featured: true,
    },
    {
        img: 'https://simg.nicepng.com/png/small/102-1021002_picture-images-photos-polaroid-comments-triangle.png',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://simg.nicepng.com/png/small/102-1021002_picture-images-photos-polaroid-comments-triangle.png',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://simg.nicepng.com/png/small/102-1021002_picture-images-photos-polaroid-comments-triangle.png',
        title: 'Mushrooms',
        author: '@silverdalex',

    },
    {
        img: 'https://simg.nicepng.com/png/small/102-1021002_picture-images-photos-polaroid-comments-triangle.png',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://simg.nicepng.com/png/small/102-1021002_picture-images-photos-polaroid-comments-triangle.png',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://simg.nicepng.com/png/small/102-1021002_picture-images-photos-polaroid-comments-triangle.png',
        title: 'Bike',
        author: '@southside_customs',

    },
];
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
        marginTop: '30px',
        marginLeft: 50,
        font: '2.5rem ubuntu-md',
        color: '#2b0a3d',
        text_align: 'center',
    },
    projet: {
        textAlign: "justify",
        marginLeft: 35,
        marginTop: 20,
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
        marginBottom: 10,
        marginTop: 10,
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
        marginLeft: 40,
        marginBottom: 10,
        marginTop: 30,
        font: '1.5rem ubuntu-md',
    },
    title: {
        flexGrow: 1,
        marginLeft: 75,
        marginTop: 10,
        color: '#1077b1'

    },
    info: {
        marginLeft: 40,
        marginTop: 20,
        font: '1.3rem ubuntu-md',
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
    {api.get(`/`).then(res => {
        console.log("tada")
    })}

    return (
        <div class="flex">
            <div class="flex1">
                <div class="title">
                    <Typography className={classes.titreProjet} variant="h5" >
                        yfufglufgluglu
                    </Typography>
                </div>
                <div className={classes.projet}>
                    <text>
                        Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Sed et massa rhoncus, iaculis orci sed, cursus nulla. Aene consectetur adipiscing elit. Sed et massa rhoncus, iaculis orci sed, cursus nulla. Aene consectetur adipiscing elit. Sed et massa rhoncus, iaculis orci sed, cursus nulla. Aene an molestie, enim sit amet tincidunt maximus, augue urna egestas dolor, ut dictum nibh libero at libero. Donec dignissim nisl sit amet sodales accumsan. Vestibulum eu dignissim lectus, vitae euismod lectus. Donec nec urna vitae ipsum ullamcorper finibus vel eget dui. Vestibulum eu tellus faucibus, fermentum orci ut, rutrum risus. Suspendisse luctus sapien tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec imperdiet in nisl vel dictum. Pellentesque eget commodo sapien, quis finibus augue.
                    </text>
                </div>
                <div className={classes.images}>
                    <ImageList cols={4}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format 1x, ${item.img}?w=248&fit=crop&auto=format&dpr=2 4x`}
                                    alt={item.title}
                                />
                                <ImageListItemBarSTYLE
                                    subtitle={item.title}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>

            <div class="flex2">
                <div className={classes.diag} >
                    <img className={classes.diagImg} src={dig1} alt="dig1" />
                    <img className={classes.diagImg} src={dig1} alt="dig1" />
                    <text className={classes.diagTxt}> Description graphe 2  </text>
                    <text className={classes.diagTxt} > Description graphe 2  </text>
                </div>
                <div className={classes.client}>
                    <Typography variant="h5" >
                        Crédit Mutuel Arkéa
                    </Typography>
                </div>
                <div className={classes.info}>
                    <Typography variant="h7" >
                        Thématiques:
                    </Typography>
                </div>
                <div className={classes.thematique}>
                    <ThematiqueButton variant="outlined" className={classes.button}>
                        Assurance
                    </ThematiqueButton>

                </div>
                <div className={classes.info}>
                    <Typography variant="h7" >
                        Technologies:
                    </Typography>
                </div>
                <div className={classes.thematique}>

                    <ThematiqueButton variant="outlined" className={classes.button}>
                        Java
                    </ThematiqueButton>

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
                                {collab.map((item) => (
                                    <ListItem >
                                        <Card className={classes.paper} >
                                            <Typography variant="h7" style={{ marginTop: '10px', }}>
                                                <PersonIcon />
                                                <h8>  Nouhaila ESSAHIH - développeur </h8>
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
    );
}

export default Projet;