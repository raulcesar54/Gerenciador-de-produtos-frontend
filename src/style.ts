import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    
    }
    body{
        background:#fff;
        display:flex;
        -webkit-font-smooth:antialiased;
    }
    body, input, button {
        font-size:16px;
        font-family:Roboto,sans-serif;
    }
    button{
        cursor:pointer;
    }
    #root {
        max-width:960px;
        margin: 0 auto;
        padding: 10px 20px;
    }
`

