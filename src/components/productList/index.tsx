import React, { useCallback, useEffect, useState } from 'react'
import { Container, ItemContainer, ProductItem, Title } from './style'
import { useFormik } from 'formik'
import { api } from '../../services/api'
import useToken from '../../hooks/useToken'
interface IProducts {
    id: string,
    name: string,
    qty: number,
    size: string
}
interface ISkuData {
    created_at: string
    id: string
    name: string
    updated_at: string,
    products: IProducts[]
}
const ProductList: React.FC = (props) => {
    const [products, setProducts] = useState<ISkuData[]>()
    const [selectedSku, setSelectedSku] = useState('')
    const [productHover, setProductHover] = useState('')
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
                const response = await api.get('/products', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const { data } = response
                setProducts(data)
            } catch {
                alert('produto ja existe neste grupo de sku')
            }
        }
    })
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
                setProducts(data)
            } catch (err) {
                console.log(err)
            }
        }
    }, [token])
    const deleteItem = async (id: string) => {
        try {
            await api.delete(`/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            alert('produto excluido com sucesso')
            getSkuValues()
        } catch {
            alert('erro ao excluir produtor')
        }
    }
    return (
        <Container>
            <h1>Lista de Produtos</h1>
            <small>listagem de produtos salvo no banco, por sku</small>
            {
                products?.map(({ name, id, products: productsSublist }) => {
                    return (
                        <ItemContainer key={id} onClick={() => setSelectedSku(idActual => idActual == id ? '' : id)}>
                            <Title><strong>SKU   </strong><span>{name}</span></Title>
                            {id == selectedSku && <ProductItem style={{ opacity: '30%' }}>
                                <small>Nome</small>
                                <small>Qtd</small>
                                <small>Tamanho</small>
                            </ProductItem>}
                            { id == selectedSku && productsSublist?.map(({ name, id, qty, size }) => {
                                return (
                                    <ProductItem hover={id == productHover} key={id} onMouseEnter={() => setProductHover(id)} onMouseLeave={() => setProductHover('')} onClick={() => deleteItem(id)}>
                                        <small>{name}</small>
                                        <small>{qty}</small>
                                        <small>{size}</small>
                                    </ProductItem>)
                            })}
                        </ItemContainer>
                    )
                })
            }
        </Container>
    )
}

export default ProductList