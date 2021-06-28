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
import {BrowserRouter as Router, Route, Switch,useHistory,Redirect,Link} from 'react-router-dom'
import Details from '../details/Details.js'


// ---------Imported Images------------
import Alita from '../../assets/Alita.jpg';
import Alita_KeeanJohnson  from '../../assets/Alita_KeeanJohnson.jpg';
import Alita_RosaSalazar from '../../assets/Alita_RosaSalazar.jpg';
import Antman from '../../assets/Antman.jpg';
import Antman_EvangelineLilly from '../../assets/Antman_EvangelineLilly.jpg';
import Antman_PaulRudd from '../../assets/Antman_PaulRudd.jpg';
import AvengersEndgame from '../../assets/AvengersEndgame.jpg';
import AvengersEndgame_ChrisEvans from '../../assets/AvengersEndgame_ChrisEvans.jpg';
import AvengersEndgame_ChrisHemsworth from '../../assets/AvengersEndgame_ChrisHemsworth.jpg';
import AvengersEndgame_RobertDowneyJr from '../../assets/AvengersEndgame_RobertDowneyJr.jpg';
import AvengersEndgame_ScarlettJohansson from '../../assets/AvengersEndgame_ScarlettJohansson.jpg';
import blackpanther from '../../assets/blackpanther.jpg';
import blackpanther_LupitaNyongo from '../../assets/blackpanther_LupitaNyongo.jpg';
import blackpanther_ChadwickAaronBoseman from '../../assets/blackpanther_ChadwickAaronBoseman.jpg';
import Joker from '../../assets/Joker.jpg';
import Joker_JoaquinPhoenix from '../../assets/Joker_JoaquinPhoenix.jpg';
import Jumanji from '../../assets/Jumanji.jpg';
import Jumanji_DwayneJohnson from '../../assets/Jumanji_DwayneJohnson.jpg';
import Jumanji_KarenGillan from '../../assets/Jumanji_KarenGillan.jpg';
import Tanhaji from '../../assets/Tanhaji.jpg';
import Tanhaji_AjayDevgan from '../../assets/Tanhaji_AjayDevgan.jpg';
import Tanhaji_Kajol from '../../assets/Tanhaji_Kajol.jpg';
import Tanhaji_SharadKelkar from '../../assets/Tanhaji_SharadKelkar.jpg';
import TanhajiSaifAliKhan from '../../assets/TanhajiSaifAliKhan.jpg';




const poster_url = [
  {
      img: Tanhaji,
      key: 1,
      title: 'Tanhaji',
      author: 'Atul',
      genere: "Action,Adventure",
      ReleaseDate: "16 march 2021",
      Duration: 188,
      Rating: 9.8,
      trailer_url: "cffAGIYTEHU",
      Plot: "Tanhaji, a Maratha warrior, is Shivaji Maharaj's trusted lieutenant. When the Mughals invade and conquer Kondhana fort, he sets out to reclaim it for his king and country.",
      Artists: [
          {
              img: Tanhaji_AjayDevgan,
              key: 1,
              first_name: "Ajay",
              last_name: "Devgan",
          },
          {
              img: Tanhaji_Kajol,
              key: 2,
              first_name: "Kajol",
              last_name: "Devgan",
          },
          {
              img: TanhajiSaifAliKhan,
              key: 3,
              first_name: "Saif Ali",
              last_name: "Khan",
          },
          {
              img: Tanhaji_SharadKelkar,
              key: 4,
              first_name: "Sharad",
              last_name: "Kelkar",
          }
      ]
  },
  {
      img: Antman,
      key: 2,
      title: 'Antman',
      author: 'Atul',
      ReleaseDate: "20 April 2021",
      genere: "Action,Sci-Fi",
      Duration: 228,
      Rating: 7.8,
      trailer_url: "ZBVhuhnWxKs",
      Plot: "Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements.",
      Artists: [
          {
              img: Antman_EvangelineLilly,
              key: 1,
              first_name: "Evangeline",
              last_name: "Lilly",
          },
          {
              img: Antman_PaulRudd,
              key: 2,
              first_name: "Paul",
              last_name: "Rudd",
          }

      ]

  },
  {
      img: AvengersEndgame,
      key: 3,
      title: 'AvengersEndgame',
      author: 'Atul',
      ReleaseDate: " 25 April 2020",
      genere: "Action,Sci-Fi",
      Duration: 248,
      Rating: 9.8,
      trailer_url: "TcMBFSGVi1c",
      Plot: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      Artists: [
          {
              img: AvengersEndgame_ChrisEvans,
              key: 1,
              first_name: "Chris",
              last_name: "Evans",
          },
          {
              img: AvengersEndgame_ChrisHemsworth,
              key: 2,
              first_name: "Chris",
              last_name: "Hemsworth",
          },
          {
              img: AvengersEndgame_RobertDowneyJr,
              key: 3,
              first_name: "Robert",
              last_name: "Downey Jr",
          },
          {
              img: AvengersEndgame_ScarlettJohansson,
              key: 4,
              first_name: "Scarlett",
              last_name: "Johansson",
          }

      ]
  },
  {
      img: blackpanther,
      key: 4,
      title: 'blackpanther',
      author: 'Atul',
      ReleaseDate: "26 Jun 2020",
      genere: "Action,Adventure,Sci-Fi",
      Duration: 208,
      Rating: 7.8,
      trailer_url: "xjDjIWPwcPU",
      Plot: "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.",
      Artists: [
          {
              img: blackpanther_LupitaNyongo,
              key: 1,
              first_name: "Lupita",
              last_name: "Nyongo",
          },
          {
              img: blackpanther_ChadwickAaronBoseman,
              key: 2,
              first_name: "Chedwick ",
              last_name: "Aaron Boseman",
          }

      ]
  },
  {
      img: Joker,
      key: 5,
      title: 'Joker',
      author: 'Atul',
      ReleaseDate: "16 April 2021",
      genere: "Action,Adventure",
      Duration: 108,
      Rating: 7.8,
      trailer_url: "zAGVQLHvwOY",
      Plot: "Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.",
      Artists: [
          {
              img: Joker_JoaquinPhoenix,
              key: 1,
              first_name: "Joaquin",
              last_name: "Phoenix",
          }
      ]
  },
  {
      img: Jumanji,
      key: 6,
      title: 'Jumanji',
      author: 'Robert Rodriguez',
      ReleaseDate: "8 February 2019",
      genere: "Action,Adventure,Sci-Fi",
      Duration: 238,
      Rating: 6.8,
      trailer_url: "vW_fSIuE920",
      Plot: "Jumanji is a 1995 American fantasy adventure film directed by Joe Johnston. It is loosely based on the 1981 children's book by Chris Van Allsburg and the first installment of the Jumanji franchise.",
      Artists: [
          {
              img: Jumanji_DwayneJohnson,
              key: 1,
              first_name: "Dwayne",
              last_name: "Johnson",
          },
          {
              img: Jumanji_KarenGillan,
              key: 2,
              first_name: "Karen",
              last_name: "Gillan",
          },

      ]
  },
  {
      img: Alita,
      key: 6,
      title: 'Alita',
      author: 'Robert Rodriguez',
      ReleaseDate: "28 February 2019",
      genere: "Action,Adventure,Sci-Fi",
      Duration: 348,
      Rating: 9.0,
      Plot: "Alita, a battle cyborg, is revived by Ido, a doctor, who realises that she actually has the soul of a teenager. Alita then sets out to learn about her past and find her true identity.",
      trailer_url: "w7pYhpJaJW8",
      Artists: [
          {
              img: Alita_KeeanJohnson,
              key: 1,
              first_name: "Keean",
              last_name: "Johnson",
          },
          {
              img: Alita_RosaSalazar,
              key: 2,
              first_name: "Rosa",
              last_name: "Salazar",
          },

      ]
  }
]

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
 
  function SingleLineGridList(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
     
         <GridList className={classes.gridList} cols={2.5}>
          {poster_url.map((tile) => (
            <Link 
            to={{
            pathname: `/Details`,
            state: {
              key:tile.key,
              title:tile.title,
              genere:tile.genere,
              img:tile.img,
              author:tile.author,
              Duration:tile.Duration,
              ReleaseDate:tile.ReleaseDate,
              Rating:tile.Rating,
              trailer_url:tile.trailer_url,
              Plot:tile.Plot,
              Artists:tile.Artists
            }
       }}
           >
            <GridListTile className={classes.gridTile} key={tile.img}>
             <img 
             src={tile.img} alt={tile.title} 
              />
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
            </GridListTile></Link>
          ))}
        </GridList>
      </div>
    );
  }


  function ReleasedMovies(props) {
    const classes = useStyles1();
  
    return (
      <div className={classes.root}>
        <GridList cellHeight={350} cols= {4} spacing={16} className={classes.gridList}>
          <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}> </GridListTile>
          {poster_url.map((tile) => (
            <Link 
            to={{
            pathname: `/Details`,
            state: {
              key:tile.key,
              title:tile.title,
              genere:tile.genere,
              img:tile.img,
              author:tile.author,
              Duration:tile.Duration,
              ReleaseDate:tile.ReleaseDate,
              Rating:tile.Rating,
              trailer_url:tile.trailer_url,
              Plot:tile.Plot,
              Artists:tile.Artists
            }
       }}
           >
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title}  />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>Release Date: {tile.ReleaseDate}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  </IconButton>
                }
              />
            </GridListTile>
            </Link>
          ))}
        </GridList>
        
      </div>
    );
  }


const  Home =(props) => {

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