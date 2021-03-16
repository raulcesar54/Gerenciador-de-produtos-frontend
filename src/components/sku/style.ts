import styled, { css } from 'styled-components'
interface IContainer {
    isBlur?: boolean
}
export const Container = styled.div<IContainer>`
    width:400px;
    display:flex;
    flex-direction:column;
    transition:1s;
    justify-content:space-around; 
    padding:20px;
    border-radius:8px;
    border:1px solid #FF4E7D;
    ${({ isBlur }) => isBlur && css`
    opacity: .4;
    filter: blur(3px);
    transform:scale(.8);
    `}
`
export const Form = styled.form`
    width:100%;
    display:flex;
    margin-top:5px;
    flex-direction:column;
    justify-content:space-around; 
`
export const Button = styled.button`
    background:#FF4E7D;
    border:none;
    width:100%;
    cursor:pointer;
    padding:16px 40px;
    margin-top:32px;
    color:#fff;
    `
export const Field = styled.input`
width: 100 %;
background-color:#2A2E45;
border: none;
padding: 14px 20px;
border-radius: 8px;
color:#fff;
margin-top: 16px;
`