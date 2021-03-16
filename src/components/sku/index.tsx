import React, { useEffect } from 'react'
import { Container, Form, Field, Button } from './style'
import { useFormik } from 'formik'
import useToken from '../../hooks/useToken'
import { api } from '../../services/api'
interface ISkuForm {
    isBlur?: boolean
    returnSelected(value: string): any

}
const SkuForm: React.FC<ISkuForm> = ({ isBlur, returnSelected }) => {
    const { token } = useToken()
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: async values => {
            try {
                const response = await api.post('/skus', values, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const { data } = response
                alert('sku adicionado com sucesso')
                window.location.reload()

            } catch {
                alert('sku ja existe')
            }
        }
    })
    const { handleSubmit } = formik

    return (
        <Container onClick={() => returnSelected('sku')} isBlur={isBlur}>
            <h1>Sku</h1>
            <small>inserir novo sku</small>
            <Form onSubmit={handleSubmit}>
                <Field disabled={isBlur} placeholder='nome' name='name' />
                <Button disabled={isBlur}>SALVAR</Button>
            </Form>
        </Container>
    )
}

export default SkuForm