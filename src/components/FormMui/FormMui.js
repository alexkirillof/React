import { useState,useRef,useEffect } from "react";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";

import "./FormMui.scss";

export const FormMui = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const textField = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  useEffect(() => {
    textField.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextField className="myTxtField" 
                 value={value} 
                 onChange = {handleChange} 
                 inputRef={textField}
      />
      <Button type="submit" className="MuiButton-root" variant="contained">Send</Button>
    </form>
  );
};

export default FormMui;