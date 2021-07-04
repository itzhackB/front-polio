import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Input.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

export default function Input(props) {
    const{lableName,type,fieldName}=props;
    return (
        <div>
            {/* <label>{lableName}</label>
            <input type={type} placeholder={`Enter ${lableName}...`} required name={fieldName}></input> */}
            <label>{lableName}</label>
            <TextField
            className="formItem"
            required
            name={fieldName}
            id="filled-password-input"
            label={`Enter ${fieldName}`}
            type={type}
            autoComplete="current-password"
            variant="filled"
            color="orange"
          />
        </div>
    )
}
