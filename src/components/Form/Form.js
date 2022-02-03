import { useState} from "react";
import "./Form.scss";
export const Form =({onSubmit},{name})=>{
    const [value,setValue]= useState('');

    const handleChange = (e) =>{
        setValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit} className='form'>
            <input type="text"
                   value={value}
                   onChange = {handleChange}
                   className='form__input'
                   />
            <input type="submit" value={name} className='form__submit'></input>

        </form>
    )
}