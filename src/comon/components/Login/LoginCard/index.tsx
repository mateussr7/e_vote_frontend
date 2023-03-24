import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { loginStarted } from '../../../store/user/actions'
    
import './styles.scss'

const LoginCard = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleRegistrationChange: (value: string) => void = (value: string) => {
        setEmail(value);
    }

    const handlePasswordChange: (value: string) => void = (value: string) => {
        setPassword(value);
    }

    const handleLoginButtonClick = async () => {
        await dispatch(loginStarted({ email, password }))
        navigate("/elections")
    }

    const handleRegisterButtonClick = () => {
        navigate("/register")
    }

    return (
        <div className="main-frame">
            <Typography variant="h2">Login</Typography> 
            <TextField className="input" value={email} variant="outlined" placeholder="E-mail" onChange={(e) => {
                handleRegistrationChange(e.target.value)
            }}/>
            <TextField className="input" value={password} variant="outlined" placeholder="Password" type="password" onChange={(e) => {
                handlePasswordChange(e.target.value)
            }} />
            <div className="button-case">
                <Button variant="outlined" color="inherit"  className="button" onClick={handleLoginButtonClick}>Login</Button>
                <Button variant="outlined" color="inherit"  className="button" onClick={handleRegisterButtonClick}>CADASTRAR</Button>
            </div>
        </div>
    )
}

export default LoginCard;