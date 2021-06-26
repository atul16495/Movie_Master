import React, { Fragment, useState } from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';




const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        minWidth: 240,
        maxWidth: 240,
    },
    heading: {
        textTransform: "uppercase",
        color: theme.palette.primary.light,


    },
    moviename: {
        minWidth: 240,
        maxWidth: 240,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),

    },
}));




const MovieFilter = () => {
    const classes = useStyles();

    //-----UseState-----/
    //-----Generes checkbox----/
    const [checkbox1, setcheckbox1] = useState(false)
    const [checkbox2, setcheckbox2] = useState(false)
    const [checkbox3, setcheckbox3] = useState(false)
    const [checkbox4, setcheckbox4] = useState(false)
    const [checkbox5, setcheckbox5] = useState(false)
    const [checkbox6, setcheckbox6] = useState(false)
    const [checkbox7, setcheckbox7] = useState(false)
    const [checkbox8, setcheckbox8] = useState(false)
    const [checkbox9, setcheckbox9] = useState(false)
    const [checkbox10, setcheckbox10] = useState(false)
    const [checkbox11, setcheckbox11] = useState(false)
    const [checkbox12, setcheckbox12] = useState(false)

    //------Generes checkbox Value-------//
    const [value1, setvalue1] = useState("")
    const [value2, setvalue2] = useState("")
    const [value3, setvalue3] = useState("")
    const [value4, setvalue4] = useState("")
    const [value5, setvalue5] = useState("")
    const [value6, setvalue6] = useState("")
    const [value7, setvalue7] = useState("")
    const [value8, setvalue8] = useState("")
    const [value9, setvalue9] = useState("")
    const [value10, setvalue10] = useState("")
    const [value11, setvalue11] = useState("")
    const [value12, setvalue12] = useState("")


    //-----Artist checkbox----/
    const [Acheckbox1, setAcheckbox1] = useState(false)
    const [Acheckbox2, setAcheckbox2] = useState(false)
    const [Acheckbox3, setAcheckbox3] = useState(false)
    const [Acheckbox4, setAcheckbox4] = useState(false)
    const [Acheckbox5, setAcheckbox5] = useState(false)
    const [Acheckbox6, setAcheckbox6] = useState(false)
    const [Acheckbox7, setAcheckbox7] = useState(false)
    const [Acheckbox8, setAcheckbox8] = useState(false)
    const [Acheckbox9, setAcheckbox9] = useState(false)
    const [Acheckbox10, setAcheckbox10] = useState(false)
    const [Acheckbox11, setAcheckbox11] = useState(false)
    const [Acheckbox12, setAcheckbox12] = useState(false)

    //------Artist checkbox firstname-------//
    const [first_name1, setfirst_name1] = useState("Manisha")
    const [first_name2, setfirst_name2] = useState("Rajkumar")
    const [first_name3, setfirst_name3] = useState("Marlon")
    const [first_name4, setfirst_name4] = useState("Leonardo")
    const [first_name5, setfirst_name5] = useState("Joseph")
    const [first_name6, setfirst_name6] = useState("Matthew")
    const [first_name7, setfirst_name7] = useState("Anne")
    const [first_name8, setfirst_name8] = useState("Rajkumar")
    const [first_name9, setfirst_name9] = useState("Kay Kay")
    const [first_name10, setfirst_name10] = useState("Anthony")


    //------Artist checkbox lastname-------//
    const [last_name1, setlast_name1] = useState("Koirala")
    const [last_name2, setlast_name2] = useState("Hirani")
    const [last_name3, setlast_name3] = useState("Brando")
    const [last_name4, setlast_name4] = useState("DiCaprio")
    const [last_name5, setlast_name5] = useState("Gordon-Levitt")
    const [last_name6, setlast_name6] = useState("McConaughey")
    const [last_name7, setlast_name7] = useState("Hathaway")
    const [last_name8, setlast_name8] = useState("Rao")
    const [last_name9, setlast_name9] = useState("Menon")
    const [last_name10, setlast_name10] = useState("Lapaglia")

    const [movieName, set_movieName] = useState("")
    const [genres, set_genres] = useState("")
    const [Artists, set_Artists] = useState("")

    const { register, handleSubmit, control, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
    console.log(errors);


    // The first commit of date change
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };



    return (
        <Fragment>
            < div className={classes.root}>
                <span className={classes.heading}>find movies by:</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl  >
                        <InputLabel error={Boolean(errors.movieName)} >Movie Name</InputLabel>
                        <Input
                            name="movieName"
                            value={movieName}
                            className={classes.moviename}
                            onInput={e => {
                                set_movieName(e.target.value)
                            }}
                            inputRef={register({
                                required: "required.",
                            })}
                            error={Boolean(errors.movieName)}

                        />
                    </FormControl>

                    <FormControl className={classes.root}>
                        <Select
                            value={genres}
                            onChange={set_genres}
                            displayEmpty
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>
                                Genres
                           </MenuItem>

                            <MenuItem ><Checkbox
                                checked={checkbox1}
                                name="checkbox1"
                                value={value1}
                                onChange={e => {
                                    setcheckbox1(e.target.checked)
                                    setvalue1("Drama")
                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />Drama</MenuItem>

                            <MenuItem><Checkbox
                                checked={checkbox2}
                                name="checkbox2"
                                value={value2}
                                onChange={e => {
                                    setcheckbox2(e.target.checked)
                                    setvalue2("Romance")
                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />Romance</MenuItem>

                            <MenuItem ><Checkbox
                                checked={checkbox3}
                                name="checkbox3"
                                value={value3}
                                onChange={e => {
                                    setcheckbox3(e.target.checked)
                                    setvalue3("Horror")
                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />Horror</MenuItem>

                            <MenuItem ><Checkbox
                                checked={checkbox4}
                                name="checkbox4"
                                value={value4}
                                onChange={e => {
                                    setcheckbox4(e.target.checked)
                                    setvalue4("Action")
                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />Action</MenuItem>

                            <MenuItem ><Checkbox
                                checked={checkbox5}
                                name="checkbox5"
                                value={value5}
                                onChange={e => {
                                    setcheckbox5(e.target.checked)
                                    setvalue5("Crime")
                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />Crime</MenuItem>

                            <MenuItem ><Checkbox
                                checked={checkbox6}
                                name="checkbox6"
                                value={value6}
                                onChange={e => {
                                    setcheckbox6(e.target.checked)
                                    setvalue6("Thriller")
                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />Thriller</MenuItem>

                            <MenuItem ><Checkbox
                                checked={checkbox7}
                                name="checkbox7"
                                value={value7}
                                onChange={e => {
                                    setcheckbox7(e.target.checked)
                                    setvalue7("Political")
                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />Political</MenuItem>

                            <MenuItem ><Checkbox
                                checked={checkbox8}
                                name="checkbox8"
                                value={value8}
                                onChange={e => {
                                    setcheckbox8(e.target.checked)
                                    setvalue8("Social")
                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />Social</MenuItem>

                            <MenuItem ><Checkbox
                                checked={checkbox9}
                                name="checkbox9"
                                value={value9}
                                onChange={e => {
                                    setcheckbox9(e.target.checked)
                                    setvalue9("Fantasy")
                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />Fantasy</MenuItem>

                            <MenuItem ><Checkbox
                                checked={checkbox10}
                                name="checkbox10"
                                value={value10}
                                onChange={e => {
                                    setcheckbox10(e.target.checked)
                                    setvalue10("Suspense")
                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />Suspense</MenuItem>

                            <MenuItem ><Checkbox
                                checked={checkbox11}
                                name="checkbox11"
                                value={value11}
                                onChange={e => {
                                    setcheckbox11(e.target.checked)
                                    setvalue11("Adventure")
                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />Adventure</MenuItem>

                            <MenuItem ><Checkbox
                                checked={checkbox12}
                                name="checkbox12"
                                value={value12}
                                onChange={e => {
                                    setcheckbox12(e.target.checked)
                                    setvalue12("Comedy")
                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />Comedy</MenuItem>
                        </Select>

                    </FormControl>



                    <FormControl className={classes.root}>
                        <Select
                            value={Artists}
                            onChange={set_Artists}
                            displayEmpty
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>
                                {Artists}
                           </MenuItem>

                            <MenuItem ><Checkbox
                                checked={Acheckbox1}
                                first_name={first_name1}
                                last_name={last_name1}
                                onChange={e => {
                                    setAcheckbox1(e.target.checked)

                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />{first_name1} {last_name1}</MenuItem>

                            <MenuItem><Checkbox
                                checked={Acheckbox2}
                                first_name={first_name2}
                                last_name={last_name2}
                                onChange={e => {
                                    setAcheckbox2(e.target.checked)

                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />{first_name2} {last_name2}</MenuItem>

                            <MenuItem ><Checkbox
                                checked={Acheckbox3}
                                first_name={first_name3}
                                last_name={last_name3}
                                onChange={e => {
                                    setAcheckbox3(e.target.checked)

                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />{first_name3} {last_name3}</MenuItem>

                            <MenuItem ><Checkbox
                                checked={Acheckbox4}
                                first_name={first_name4}
                                last_name={last_name4}
                                onChange={e => {
                                    setAcheckbox4(e.target.checked)

                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />{first_name4} {last_name4}</MenuItem>

                            <MenuItem ><Checkbox
                                checked={Acheckbox5}
                                first_name={first_name5}
                                last_name={last_name5}
                                onChange={e => {
                                    setAcheckbox5(e.target.checked)

                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />{first_name5} {last_name5}</MenuItem>

                            <MenuItem ><Checkbox
                                checked={Acheckbox6}
                                first_name={first_name6}
                                last_name={last_name6}
                                onChange={e => {
                                    setAcheckbox6(e.target.checked)

                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />{first_name6} {last_name6}</MenuItem>

                            <MenuItem ><Checkbox
                                checked={Acheckbox7}
                                first_name={first_name7}
                                last_name={last_name7}
                                onChange={e => {
                                    setAcheckbox7(e.target.checked)

                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />{first_name7} {last_name7}</MenuItem>

                            <MenuItem ><Checkbox
                                checked={Acheckbox8}
                                first_name={first_name8}
                                last_name={last_name8}
                                onChange={e => {
                                    setAcheckbox8(e.target.checked)

                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />{first_name8} {last_name8}</MenuItem>

                            <MenuItem ><Checkbox
                                checked={Acheckbox9}
                                first_name={first_name9}
                                last_name={last_name9}
                                onChange={e => {
                                    setAcheckbox9(e.target.checked)

                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />{first_name9} {last_name9}</MenuItem>

                            <MenuItem ><Checkbox
                                checked={Acheckbox10}
                                first_name={first_name10}
                                last_name={last_name10}
                                onChange={e => {
                                    setAcheckbox10(e.target.checked)

                                }}
                                inputRef={register({ required: "required.", })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />{first_name10} {last_name10}</MenuItem>

                        </Select>

                    </FormControl>


                    <FormControl className={classes.root}>
                        <TextField
                            id="date"
                            label="Release Date Start"
                            type="date"
                            placeholder="dd-mm-yyyy"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormControl>

                    <FormControl className={classes.root}>
                        <TextField
                            id="date"
                            label="Release Date End"
                            type="date"
                            placeholder="dd-mm-yyyy"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormControl>

                    <div className={classes.root}>
                        <Button className="Apply" type='submit' color='primary' variant="contained" fullWidth>
                            Apply
                            </Button>
                    </div>
                </form>

            </div>
        </Fragment>



    )
}

export default MovieFilter