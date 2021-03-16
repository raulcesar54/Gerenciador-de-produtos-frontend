import React from 'react'
import Login from '../pages/login'
import Product from '../pages/product'
import { Switch, Route, } from 'react-router-dom'
const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/product' exact component={Product} />
    </Switch>
)

export default Routes