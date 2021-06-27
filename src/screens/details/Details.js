import React, { Fragment, useEffect, useState, Component } from 'react';
import './Details.css';
import { Button, Typography } from '@material-ui/core'
import Header from '../../common/header/Header.js'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
import YouTube from 'react-youtube';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


// ---------Imported Images------------
import Alita from '../../assets/Alita.jpg';
import Alita_KeeanJohnson from '../../assets/Alita_KeeanJohnson.jpg';
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
import { SpaRounded } from '@material-ui/icons';


const poster_url = [
    {
        img: Tanhaji,
        key: 1,
        title: 'Tanhaji',
        author: 'Atul',
        genere: "Action,Adventure,Sci-Fi",
        Duration: 148,
        Rating: 8.8,
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
        ReleaseDate: "16 April 2021",
        genere: "Action,Adventure,Sci-Fi",
        Duration: 148,
        Rating: 8.8,
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
        ReleaseDate: "16 April 2021",
        genere: "Action,Adventure,Sci-Fi",
        Duration: 148,
        Rating: 8.8,
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
        ReleaseDate: "16 April 2021",
        genere: "Action,Adventure,Sci-Fi",
        Duration: 148,
        Rating: 8.8,
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
        genere: "Action,Adventure,Sci-Fi",
        Duration: 148,
        Rating: 8.8,
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
        Duration: 148,
        Rating: 8.8,
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
        ReleaseDate: "8 February 2019",
        genere: "Action,Adventure,Sci-Fi",
        Duration: 148,
        Rating: 8.8,
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
        width: '100%',
        maxWidth: 500,
        fontweight: 'Bold'
    },
    bold: {
        fontWeight: 600

    },
    margin: {
        marginTop: '16px'
    },
    root1: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    Backtohome: {
        marginLeft: '24px',
        marginTop: '8px',
        marginBottom: '0px',
        height: '24px'
    }
}));

//---------Youtube settings-----//

const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
}

//---------Youtube settings END-----//

//---------Rightside Artists Grid START-----//
const ArtistbarGridList = () => {
    const classes = useStyles();

    return (
        <div className={classes.root1}>
            <GridList cellHeight={180} className={classes.gridList}>
                {poster_url[1].Artists.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.first_name}
                            subtitle={tile.last_name}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

//---------Rightside Artists Grid END-----//




const Details = (props) => {
    //---------Rate this movie usestate START-----//
    const [star1, set_star1] = useState("black")
    const [star2, set_star2] = useState("black")
    const [star3, set_star3] = useState("black")
    const [star4, set_star4] = useState("black")
    const [star5, set_star5] = useState("black")


    //---------Rate this movie usestate END-----//
    const classes = useStyles();
    return (
        <Fragment>
            <Header />
            <div>
                <Typography
                    variant="button"
                >
                    <Button className={classes.Backtohome} type='submit' color='default' variant="contained" lable="Back to Home" >
                        <ArrowBackIosIcon /> button text
              </Button>
                </Typography>
            </div>


            <div class="container">

                <div class="left">
                    <div><img class="leftImage" src={Alita} /></div>
                    {/* <img src={props.img} /> */}

                </div>
                <div class="middle">
                    <Typography variant="h2" component="h3" >
                        Alita
                   </Typography>
                    <Typography variant="h5" >
                        <span className={classes.bold}>Genres:</span> <span> {poster_url[6].genere} </span>
                    </Typography>

                    <Typography variant="h5" >
                        <span className={classes.bold}>Duration:</span><span>{poster_url[6].Duration} </span>
                    </Typography>
                    <Typography variant="h5" >
                        <span className={classes.bold}>Release Date:</span><span>{poster_url[6].ReleaseDate}</span>
                    </Typography>
                    <Typography variant="h5" >
                        <span className={classes.bold}>Rating:</span><span>{poster_url[6].Rating}</span>
                    </Typography>
                    <Typography className={classes.margin} variant="h5" >
                        <span className={classes.bold}>Plot:</span><span>{poster_url[6].Plot}</span>
                    </Typography>
                    <Typography className={classes.margin} variant="h5" >
                        <span className={classes.bold}>Trailer:</span>
                    </Typography>

                    <div>
                        <YouTube
                            className="youtubeplayer"
                            videoId={poster_url[6].trailer_url}
                            opts={{
                                height: '400',
                                width: '100%',
                                playerVars: {
                                    // https://developers.google.com/youtube/player_parameters
                                    autoplay: 1,
                                },
                            }}
                            onReady={videoOnReady} />
                    </div>
                </div>


                <div class="right">
                    <Typography variant="h5" className={classes.bold}>
                        Rate this movie:
                   </Typography>
                    <StarBorderIcon
                        fontSize="inherit"
                        onClick={()=>{
                            if(star1==="yellow")
                            {
                                set_star1("black")
                            }
                            else if(star1==="black")
                            {
                                set_star1("yellow")
                            }
                            }
                        }
                        style={{ fontSize: "30px",color:star1 }}
                    />
                    <StarBorderIcon
                        fontSize="inherit"
                        onClick={()=>{
                            if(star2==="yellow")
                            {
                                set_star2("black")
                            }
                            else if(star2==="black")
                            {
                                set_star2("yellow")
                            }
                            }
                        }
                        style={{ fontSize: "30px",color:star2  }}
                    />
                    <StarBorderIcon
                        fontSize="inherit"
                        onClick={()=>{
                            if(star3==="yellow")
                            {
                                set_star3("black")
                            }
                            else if(star3==="black")
                            {
                                set_star3("yellow")
                            }
                            }
                        }
                        style={{ fontSize: "30px",color:star3 }}
                    />
                    <StarBorderIcon
                        fontSize="inherit"
                        onClick={()=>{
                            if(star4==="yellow")
                            {
                                set_star4("black")
                            }
                            else if(star4==="black")
                            {
                                set_star4("yellow")
                            }
                            }
                        }
                        style={{ fontSize: "30px",color:star4 }}
                    />
                    <StarBorderIcon
                        fontSize="inherit"
                        onClick={()=>{
                            if(star5==="yellow")
                            {
                                set_star5("black")
                            }
                            else if(star5==="black")
                            {
                                set_star5("yellow")
                            }
                            }
                        }
                        style={{ fontSize: "30px",color:star5}}
                    />
                    <Typography variant="h5" className={classes.bold}>
                        Artists:
                   </Typography>
                    <div>
                        <ArtistbarGridList />
                    </div>


                </div>


            </div>





        </Fragment>
    )

}

export default Details;