import "./Profile.scss";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { toggleShowName, setName } from '../../store/profile/actions.js';
import { useSelector, useDispatch } from 'react-redux';
import FormProf from "../FormProf/index.js";


export default function Profile () {
  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  function setShowName (){
    dispatch(toggleShowName);
  }

  function setNewName(value) {
    dispatch(setName(value));
  }

  return(
  <div className="profile">
    <div className="profile__user">
      {showName && <div className="profile__name">My name is {name}</div>}
      <FormControlLabel control={<Checkbox />} onChange={setShowName} label="Show name" />
      <FormProf onSubmitCallback={setNewName} placeholder="Input new name" submitText="Set"/>
    </div>
  </div>
  );
}