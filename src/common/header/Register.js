import React,{Fragment,useState} from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { TextField, Button } from '@material-ui/core'
import { useForm, Controller } from "react-hook-form";

const Signup = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, set_password] = useState("")
  const [contactNo, setContactNo] = useState('');
  const [RegStatus, setRegStatus] = useState('');


    const { register, handleSubmit, control, errors } = useForm();
    const onSubmit = (data) => {
      if(data){ 
              setRegStatus("Registration Successful. Please Login!");            
                console.log("Registration Successful. Please Login!");
           }
    }
    
         
    

    return (
        
            
        < div className="RegisterDetails"> 
                <form onSubmit={handleSubmit(onSubmit)} >

                <FormControl   >
                 <InputLabel  error={Boolean(errors.firstname)} >First Name*</InputLabel>
                 <Input 
                 
                 fullWidth placeholder='Enter First Name'
                
                 name="firstname" 
                 value={firstName}
                 onInput={e => {
                    setFirstName(e.target.value)
                   }}
                   inputRef={register({
                       required: "required.",
                     })}
                     error={Boolean(errors.firstname)}         
                 />
                 <FormHelperText 
                 inputRef={register({
                 required: "required.",
                 })}
                 error={Boolean(errors.firstname)}  >
                 Required
                 </FormHelperText>
                 </FormControl>


                 <FormControl >
                 <InputLabel error={Boolean(errors.lastName)} >Last Name*</InputLabel>
                 <Input 
                 fullWidth placeholder='Enter Last Name'                    
                 name="lastname"
                 value={lastName}
                 onInput={e => {
                    setLastName(e.target.value)
                   }}
                   inputRef={register({
                       required: "required.",
                     })}
                     error={Boolean(errors.lastname)}
                  />
                 <FormHelperText 
                 inputRef={register({
                 required: "required.",
                 })}
                 error={Boolean(errors.lastname)}  >
                 Required
                 </FormHelperText>
                 </FormControl>


                 <FormControl >
                 <InputLabel error={Boolean(errors.email)}  >Email*</InputLabel>
                 <Input 
                 fullWidth placeholder='Enter Email' 
                 id="email"  
                 name="email"
                 value={email}
                 onInput={e => setEmail(e.target.value)}
                 inputRef={register({
                    required: "required.",
                  })}
                 error={Boolean(errors.email)}
                 />
                <FormHelperText 
                 inputRef={register({
                 required: "required.",
                 })}
                 error={Boolean(errors.email)}  >
                 Required
                 </FormHelperText>
                 </FormControl>

                 <FormControl >
                 <InputLabel error={Boolean(errors.password)}  >Password*</InputLabel>
                 <Input
                  fullWidth placeholder='Enter Password'
                  id="password"
                  name="password"
                  value={password}
                  onInput={e => set_password(e.target.value)}
                  inputRef={register({
                    required: "required.",
                  })}
                  error={Boolean(errors.password)}
                   />
                 <FormHelperText 
                 inputRef={register({
                 required: "required.",
                 })}
                 error={Boolean(errors.password)} >
                 Required
                 </FormHelperText>
                 </FormControl>


                 <FormControl >
                 <InputLabel error={Boolean(errors.contactNo)} >Contact No*</InputLabel>
                 <Input 
                 fullWidth placeholder='Enter Contact No'
                 id="contactNo"
                 name="contactNo"
                 value={contactNo}
                 onInput={e => setContactNo(e.target.value)}
                 inputRef={register({
                    required: "required.",
                  })}
                 error={Boolean(errors.contactNo)}
                    />
                 <FormHelperText 
                 inputRef={register({
                 required: "required.",
                 })}
                 error={Boolean(errors.contactNo)} >
                 Required
                 </FormHelperText>
                 </FormControl>
                 <div>
                  {RegStatus}
                   </div>
                   <div>                     
             <Button type='submit' variant='contained' color='primary'>Register</Button>
             </div>
                </form>
                
        </div>
    )
}

export default Signup;