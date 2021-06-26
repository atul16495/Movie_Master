import React, {Fragment, useEffect, useState,Component} from 'react';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ListSubheader from '@material-ui/core/ListSubheader';
import Header from '../../common/header/Header.js'
import InfoIcon from '@material-ui/icons/Info';
import MovieFilter from './MovieFilter'

// ---------Imported Images------------
import Alita from '../../assets/Alita.jpg';
import AvengersEndgame from '../../assets/AvengersEndgame.jpg';
import blackpanther from '../../assets/blackpanther.jpg';
import Joker from '../../assets/Joker.jpg';
import Jumanji from '../../assets/Jumanji.jpg';
import Tanhaji from '../../assets/Tanhaji.jpg';
import Antman from '../../assets/Antman.jpg';




const poster_url = [
      { 
        img: Tanhaji,
        key:1,
        title: 'Tanhaji',
        author: 'Atul',
        ReleaseDate: "16 April 2021"
    },
    {
        img: Antman,
        key:2,
        title: 'Antman',
        author: 'Atul',
        ReleaseDate: "16 April 2021"
    },
    {
        img: AvengersEndgame,
        key:3,
        title: 'AvengersEndgame',
        author: 'Atul',
        ReleaseDate: "16 April 2021"
    },
    {
        img: blackpanther,
        key:4,
        title: 'blackpanther',
        author: 'Atul',
        ReleaseDate: "16 April 2021"
    },
    {
        img: Joker,
        key:5,
        title: 'Joker',
        author: 'Atul',
        ReleaseDate: "16 April 2021"
    },
    {
        img: Jumanji,
        key:6,
        title: 'Jumanji',
        author: 'Atul',
        ReleaseDate: "16 April 2021"
    },
    {
        img: Alita,
        key:6,
        title: 'Alita',
        author: 'Atul',
        ReleaseDate: "16 April 2021"
    },
]

const redirect = () => {
    console.log("redirected!")};


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      
    },
    gridTile:{
        cellHeight: '2250'       
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
      
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));
  
  const useStyles1 = makeStyles((theme) => ({
 
    gridList: {
      width: "auto",
      height: "auto",
      margin: 16,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
 
  function SingleLineGridList() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {poster_url.map((tile) => (
            <GridListTile className={classes.gridTile} key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }


  function ReleasedMovies() {
    const classes = useStyles1();
  
    return (
      <div className={classes.root}>
        <GridList cellHeight={350} cols= {4} spacing={16} className={classes.gridList}>
          <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}> </GridListTile>
          {poster_url.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>Release Date: {tile.ReleaseDate}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
        
      </div>
    );
  }


const  Home =() => {

    return(
        <Fragment>
        <Header/>
        <div className="UpcommingMovies">
        Upcomming Movies
        </div>
        <SingleLineGridList/>

        <div>
        
        </div>

        <div class="container">

           <div class="div1">
           <ReleasedMovies />
            </div>
           <div class="div2">
           <MovieFilter/>
           </div>

         </div>   

         
        </Fragment>
    )

}

export default Home;