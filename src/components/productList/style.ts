import styled, { css } from 'styled-components'

interface IContainer {
    isBlur?: boolean
}
export const Container = styled.div<IContainer>`
    width:500px;
    display:flex;
    flex-direction:column;
    justify-content:space-around; 
    padding:20px;
    border-radius:8px;
    transition:1s;
    border:1px solid #FF4E7D;
    ${({ isBlur }) => isBlur && css`
    opacity: .4;
    filter: blur(3px);
    transform:scale(.8);
    `}
`
export const Title = styled.h1`
    font-size:11px; 
    color:#ffff;
    span{
        font-weight:100;
        font-size:18px;
        margin-left:8px;
    }
`
interface IProductItem {
    hover?:boolean
}
export const ProductItem = styled.div<IProductItem>`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-between;
    text-align:left;
    align-items:left;
    
    color:#fff;
    padding:16px;
    background:#3f4569;
    margin-top:8px;
    small{
        width:50px;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    ${({hover})=> hover && css`
        background:#3f4569;
        text-decoration: line-through;
        opacity:.8;
        border:1px solid #ff4e70;

        cursor:pointer;
    `}
`
export const ItemContainer = styled.div`
    padding:20px;
    background:#2A2E45;
    margin-top:8px;
`