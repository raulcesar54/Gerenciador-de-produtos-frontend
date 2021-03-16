import React from 'react'
import logo from '../../assets/logo.png'
import FormLogin from '../../components/loginForm'
import { Container } from './style'
const Login: React.FC = () => {
    return (
        <Container>
            <img src={logo} />
            <FormLogin />
        </Container>
    )
}

export default Login