import styled from "styled-components";

export const Box = styled.div`
    width: 30%;
    background-color: white;
    padding: 30px;
    text-align: center;
    box-shadow: 5px 5px 5px #999;
    
`

export const BoxImage = styled.img`
    width: 100%;

`

export const BoxButton = styled.a`
    background-color: orange;
    padding: 20px;
    color: white;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    margin-top: 30px;

    &:hover{
        background-color: red;
    }
`