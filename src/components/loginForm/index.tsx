import React from 'react'
import { Form, Field, Button, } from './style'
import { useFormik } from 'formik'
import { api } from '../../services/api'
import { useHistory } from 'react-router-dom'
const LoginForm: React.FC = () => {
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                const authenticate = await api.post('/sessions', values)
                const { token } = authenticate.data
                localStorage.setItem('token', token)
                localStorage.setItem('role', authenticate.data.user.role)
                history.push('/product')
            } catch (err) {
                alert('erro ao logar no sistema, tente novamente')
            }
        }
    })
    const { values, handleChange, handleSubmit } = formik

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Field placeholder='Email' onChange={handleChange} name='email' />
                <Field placeholder='Password' onChange={handleChange} type='password' name='password' />
                <Button>ENTRAR</Button>
            </Form>
        </>
    )
}

export default LoginForm