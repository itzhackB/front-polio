import React from 'react'
import Button from '../../Features/Button/Button'
import Input from '../../Features/Input/Input'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Contact.css'
import contactLogo from '../../../Images/contact.jpg'
import Convert from '../../Convert/Convert';

const fields = { firstName: "", lastName: "", email: "", review: "" };

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Contact() {
    const classes = useStyles();

    return (
        <div className="mainContainer">

            <div className="divImg">
                <img src={contactLogo} className="contactLogo"></img>

            </div>

            <div className="formContainer">
                <form id="form" action={"https://formsubmit.co/yzikbynesai@gmail.com"} method={"POST"} className={classes.root} noValidate autoComplete="off">

                    <div className="form">


                        <Input
                            lableName={"First name"} type={"text"} fieldName={"name"}
                        />
                        <Input
                            lableName={"Last name"} type={"text"} fieldName={"name"}
                        />
                        <Input
                            lableName={"Email"} type={"email"} fieldName={"email"}
                        />
                        <Input
                            lableName={"Review"} type={"text"} fieldName={"message"}

                        />
                        <Button textBtn="Submit" />
                    </div>

                </form>
            </div>
        </div>
    );
}
