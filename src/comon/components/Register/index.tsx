import { Button, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../store/user/actions'
import { getUserSelector } from '../../store/user/selectors'
import { useNavigate } from 'react-router-dom'


import './styles.scss'

const RegisterScreen = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { registerSuccess } = useSelector(getUserSelector)

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleNameChange = (value: string) => {
        setName(value)
    }

    const handleEmailChange = (value: string) => {
        setEmail(value)
    }

    const handlePasswordChange = (value: string) => {
        setPassword(value)
    }

    const handleRegisterButton = () => {
        dispatch(registerUser({
            name, email, password
        }))
    }

    useEffect(() => {
        if(registerSuccess){
            navigate("/login")
        }
    }, [registerSuccess, navigate])


    return <div className="container">
        <div className="card">
            <Typography variant="h2">Registre-se</Typography>
            <TextField className="input" value={name} variant="outlined" placeholder="Nome" onChange={(e) => {
                handleNameChange(e.target.value)
            }}/>
            <TextField className="input" value={email} variant="outlined" placeholder="E-mail" onChange={(e) => {
                handleEmailChange(e.target.value)
            }}/>
            <TextField className="input" value={password} variant="outlined" placeholder="Senha" type="password" onChange={(e) => {
                handlePasswordChange(e.target.value)
            }}/>
            <div className="button-case">
                <Button variant="outlined" color="inherit"  className="button" onClick={handleRegisterButton}>CADASTRAR</Button>
            </div>
        </div>
    </div>
}

export default RegisterScreen