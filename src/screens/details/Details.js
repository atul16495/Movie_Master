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
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'


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
const ArtistbarGridList = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root1}>
            <GridList cellHeight={180} className={classes.gridList}>
                {props.Artists.map((tile) => (
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
                    <Link to="/"> <Button className={classes.Backtohome} type='submit' color='default' variant="contained" lable="Back to Home" >
                        <ArrowBackIosIcon /> button text
                    </Button></Link>
                </Typography>
            </div>


            <div class="container">

                <div class="left">
                    <div><img class="leftImage" src={props.location.state.img} /></div>

                </div>
                <div class="middle">
                    <Typography variant="h2" component="h3" >
                        {props.location.state.title}
                    </Typography>
                    <Typography variant="h5" >
                        <span className={classes.bold}>Genres:</span> <span>  {props.location.state.genere} </span>
                    </Typography>

                    <Typography variant="h5" >
                        <span className={classes.bold}>Duration:</span><span>{props.location.state.Duration} </span>
                    </Typography>
                    <Typography variant="h5" >
                        <span className={classes.bold}>Release Date:</span><span>{props.location.state.ReleaseDate}</span>
                    </Typography>
                    <Typography variant="h5" >
                        <span className={classes.bold}>Rating:</span><span>{props.location.state.Rating}</span>
                    </Typography>
                    <Typography className={classes.margin} variant="h5" >
                        <span className={classes.bold}>Plot:</span><span>{props.location.state.Plot}</span>
                    </Typography>
                    <Typography className={classes.margin} variant="h5" >
                        <span className={classes.bold}>Trailer:</span>
                    </Typography>

                    <div>
                        <YouTube
                            className="youtubeplayer"
                            videoId={props.location.state.trailer_url}
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

                {/* //--------start rating --------// */}
                <div class="right">
                    <Typography variant="h5" className={classes.bold}>
                        Rate this movie:
                   </Typography>
                    <StarBorderIcon
                        fontSize="inherit"
                        onClick={() => {
                            if (star1 === "yellow") {
                                set_star1("black")
                                set_star2("black")
                                set_star3("black")
                                set_star4("black")
                                set_star5("black")
                            }
                            else if (star1 === "black") {
                                set_star1("yellow")
                                set_star2("black")
                                set_star3("black")
                                set_star4("black")
                                set_star5("black")
                            }
                        }
                        }
                        style={{ fontSize: "30px", color: star1 }}
                    />
                    <StarBorderIcon
                        fontSize="inherit"
                        onClick={() => {
                            if (star2 === "yellow") {

                                set_star2("black")
                                set_star3("black")
                                set_star4("black")
                                set_star5("black")
                            }
                            else if (star2 === "black") {
                                set_star1("yellow")
                                set_star2("yellow")
                                set_star3("black")
                                set_star4("black")
                                set_star5("black")
                            }
                        }
                        }
                        style={{ fontSize: "30px", color: star2 }}
                    />
                    <StarBorderIcon
                        fontSize="inherit"
                        onClick={() => {
                            if (star3 === "yellow") {

                                set_star3("black")
                                set_star4("black")
                                set_star5("black")
                            }
                            else if (star3 === "black") {
                                set_star1("yellow")
                                set_star2("yellow")
                                set_star3("yellow")
                                set_star4("black")
                                set_star5("black")
                            }
                        }
                        }
                        style={{ fontSize: "30px", color: star3 }}
                    />
                    <StarBorderIcon
                        fontSize="inherit"
                        onClick={() => {
                            if (star4 === "yellow") {

                                set_star4("black")
                                set_star5("black")
                            }
                            else if (star4 === "black") {
                                set_star1("yellow")
                                set_star2("yellow")
                                set_star3("yellow")
                                set_star4("yellow")
                                set_star5("black")
                            }
                        }
                        }
                        style={{ fontSize: "30px", color: star4 }}
                    />
                    <StarBorderIcon
                        fontSize="inherit"
                        onClick={() => {
                            if (star5 === "yellow") {
                                set_star5("black")
                            }
                            else if (star5 === "black") {
                                set_star1("yellow")
                                set_star2("yellow")
                                set_star3("yellow")
                                set_star4("yellow")
                                set_star5("yellow")
                            }
                        }
                        }
                        style={{ fontSize: "30px", color: star5 }}
                    />
                    <Typography variant="h5" className={classes.bold}>
                        Artists:
                   </Typography>
                    <div>
                        <ArtistbarGridList Artists={props.location.state.Artists} />
                    </div>


                </div>


            </div>





        </Fragment>
    )

}

export default Details;