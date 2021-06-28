import React, { Fragment, useState } from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core'
import { useForm } from "react-hook-form";

const Login = ({ handleChange }) => {
  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };


  const [userName, set_userName] = useState("")
  const [password, set_password] = useState("")
  const [HelperText, set_HelperText] = useState("Required")


  return (
    <Fragment>
      < div className="LoginDetails">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl  >
            <InputLabel error={Boolean(errors.userName)} >Username</InputLabel>
            <Input
              fullWidth placeholder='Enter username'
              name="userName"
              value={userName}

              onInput={e => {
                set_userName(e.target.value)
              }}
              inputRef={register({
                required: "required.",
              })}
              error={Boolean(errors.userName)}

            />
            <FormHelperText

              inputRef={register({
                required: "required.",
              })}
              error={Boolean(errors.userName)}
            >
              {HelperText}
            </FormHelperText>
          </FormControl>


          <FormControl >
            <InputLabel error={Boolean(errors.password)} >Password</InputLabel>
            <Input
              fullWidth placeholder='Enter password'
              name="password"
              value={password}
              onInput={e => {
                set_password(e.target.value)
              }}
              inputRef={register({
                required: "required.",
              })}
              error={Boolean(errors.password)}

            />
            <FormHelperText

              inputRef={register({
                required: "required.",
              })}
              error={Boolean(errors.password)}  >
              {HelperText}
            </FormHelperText>



          </FormControl>
          <div>
            <Button className="Login1" type='submit' color='primary' variant="contained" >
              Login
                </Button>
          </div>
        </form>

      </div>
    </Fragment>


  )
}

export default Login