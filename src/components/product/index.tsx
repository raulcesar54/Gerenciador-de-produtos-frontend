import React, { useCallback, useEffect, useState } from 'react'
import { Container, Form, Field, Button, Select, GroupInline } from './style'
import { useFormik } from 'formik'
import { api } from '../../services/api'
import useToken from '../../hooks/useToken'
interface IProduct {
    isBlur?: boolean
    returnSelected(value: string): any
}
const ProductForm: React.FC<IProduct> = ({ isBlur, returnSelected }) => {
    interface ISkuData {
        created_at: string
        id: string
        name: string
        updated_at: string
    }
    const [sku, setSku] = useState<ISkuData[]>()
    const { token } = useToken()
    const formik = useFormik({
        initialValues: {
            name: '',
            qty: '',
            size: '',
            sku_id: ''
        },
        onSubmit: async values => {
            try {
                const response = await api.post('/products', values, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const { data } = response
                alert('produto adicionado com sucesso')
                window.location.reload()
            } catch {
                alert('produto ja existe neste grupo de sku')
            }
        }
    })
    const { handleChange, handleSubmit, setFieldValue } = formik
    useEffect(() => {
        getSkuValues()
    }, [token])
    const getSkuValues = useCallback(async () => {
        if (token) {
            try {
                const response = await api.get('/skus', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const { data } = response
                setSku(data)
            } catch (err) {
                console.log(err)
            }
        }
    }, [token])
    return (
        <Container onClick={() => returnSelected('product')} isBlur={isBlur}>
            <h1>Produto</h1>
            <small>inserir novo produto</small>
            <Form onSubmit={handleSubmit}>
                <Field disabled={isBlur} placeholder='nome' name='name' onChange={handleChange} />
                <GroupInline>
                    <Field disabled={isBlur} isGroup={true} placeholder='quantidade' name='qty' type='number' onChange={handleChange} />
                    <Field disabled={isBlur} isGroup={true} placeholder='tamanho' name='size' onChange={handleChange} />
                </GroupInline>
                <Select name='sku_id' disabled={isBlur} onChange={(item) => setFieldValue('sku_id', item.currentTarget.value)}>
                    <option selected disabled={true}>selecione um sku</option>
                    {
                        sku?.map(({ id, name }) => {
                            return <option key={id} value={id}>{name}</option>
                        })
                    }
                </Select>
                <Button disabled={isBlur}>SALVAR</Button>
            </Form>
        </Container>
    )
}

export default ProductForm