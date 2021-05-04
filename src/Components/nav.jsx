import React from "react"
import styled from "styled-components"
import Logo from "./cloud_white_48dp.svg"
import { motion } from "framer-motion"

const NavBar = styled.div `
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30px;
    background-color: transparent;
`
const Img = styled.img`
    width:40px;
    height: 40px;
    position: relative;
`
const Ul = styled.ul`
    margin-left: 120px;
    display: flex; 
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    text-decoration: none;
`
const Li = styled.li`
    text-decoration: none;
    display: inline;
    color: #fff;
    padding: 10px 10px 10px 10px;
    transition: all 240ms ease-in-out;
    border:none;
    &:not(:first-child){
        &:hover{
            
            border-bottom: 3px solid rgba(245,185,209,1);
        }
    }
`
const A = styled(motion.a)`
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
`

function Links () {
    return (
        <Ul>
            <Li> <A href = "#"
                whileHover = {{ scale : 1.02 }}
                animate = {{ scale: 0.95 }}
                transition = {{duration: 1}}
            > <Img src = { Logo } alt = "cloud_white"></Img> </A> </Li>
            <Li><A> Weather </A> </Li>
            <Li><A> About </A> </Li>
        </Ul>
    )
}
export function Nav (props) {
    
    return (
        <NavBar>
            <Links />
        </NavBar>
    )
}