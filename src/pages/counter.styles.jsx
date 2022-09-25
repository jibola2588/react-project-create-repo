//Class on Styled Component --- Friday, 2nd Sept, 2022

import styled from 'styled-components'

export const Container  = styled.div`
margin-top : 10px;
color:red;
background-color:green;

`
export const Header1 = styled.h1`
font-size:4rem;
color:${props => props.type === 'A' ? 'yellow' : (props.type === "B") ? "black" : "blue"};
`


export const Button = styled.button`
background-color:purple;
font-weight:bold;
padding:1em 3em;
color:#fff;
margin-top:2em;
`