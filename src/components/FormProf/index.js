import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./FormProf.scss"
import { useState } from 'react';


export const FormProf = ({onSubmitCallback, placeholder, submitText}) => {
   const [value, setValue] = useState('');
   
   function submitHandler (e) {
       e.preventDefault();
       onSubmitCallback(value);
       setValue('');
   }

   function inputChangeHandler(e) {
       setValue(e.target.value);
   }

    return (
        <div className='form' onSubmit={submitHandler}>
            <form>
                <TextField className='form__input' id="standard-basic" label={placeholder} value={value} variant="standard" onChange={inputChangeHandler}  autoFocus/>
                <Button className='form__submit' variant="contained" type='submit'>{submitText}</Button>
            </form>
        </div>
    );
} ;

export default FormProf;