import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

const useToken = () => {
    const [token, setToken] = useState<string | null>()
    const {push} = useHistory()
    useEffect(() => {
        const getTokenValue = localStorage.getItem('token')
        const getRoleValue = localStorage.getItem('role')
        if (getRoleValue != '1') {
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            alert('sem permissao para acessar essa rota')
            return push('/')
        }
        setToken(getTokenValue)
    }, [])
    return { token }
}

export default useToken