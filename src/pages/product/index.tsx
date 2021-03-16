import React, { useState } from 'react'
import Product from '../../components/product'
import Sku from '../../components/sku'
import ProductList from '../../components/productList'
const ProductPage: React.FC = () => {
    const [selected, setSelected] = useState('product')
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                    <Product returnSelected={e => setSelected(e)} isBlur={selected !== 'product'} />
                    <br />
                    <Sku returnSelected={e => setSelected(e)} isBlur={selected !== 'sku'} />
                </div>
                <div style={{ marginLeft: '20px' }}>
                    <ProductList />
                </div>
            </div>
        </>
    )
}

export default ProductPage