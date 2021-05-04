import React, { Component, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Card } from "./card";
import { Marginer } from "./Marginer/index";
function GetDate(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day}, ${date} ${month} ${year}`;
}

const DateBox = styled.div`
  display: inline;
  font-size: 2rem;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Input = styled(motion.input)`
  padding-left: 20px;
  height: 60px;
  font-size: 1.2rem;
  border-radius: 30px;
  border: none;
  background-color: rgba(241, 147, 218, 0.2);
  backdrop-filter: blur(10px);
  appearance: none;
  box-shadow: 0 0 50px rgba(241, 147, 218, 0.5);

  &:focus {
    border: 1px solid rgba(241, 147, 218, 0.7);
    font-weight: bold;
    outline: none;
  }
`;

const Header = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    margin: auto auto 50px auto;
    font-size: 4em;
    background: linear-gradient(
      45deg,
      rgba(179, 118, 235, 1) 0%,
      rgba(241, 147, 218, 1) 28%,
      rgba(245, 185, 209, 1) 56%,
      rgba(221, 167, 251, 1) 97%
    );
    -webkit-background-clip: text; /*  b376eb  f193da  f5b9d1 dda7fb */
    -webkit-text-fill-color: transparent;
    width: fit-content;
  }
  p {
    padding: 20px;
    font-size: 1.4em;
    margin-bottom: 50px;
    text-align: center;
  }
`;
const CardBox = styled.div`
  margin: 20px 20px 20px 0;
  z-index: 3;
  h1 {
    font-size: 3rem;
  }
`;
class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      location: 0,
    };
  }

  render() {
    return (
      <Input
        type="text"
        placeholder="City or Town"
        name="txtCity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileFocus={{ scale: 0.98, transition: 0.2 }}
      ></Input>
    );
  }
}
export function Home() {
  return (
    <Container>
      <Header>
        <DateBox>{GetDate(new Date())}</DateBox>
        <Marginer direction="vertical" margin={60}></Marginer>
        <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          Weather <br /> Application
        </motion.h1>
        <motion.p initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          Type a location to see weather information
        </motion.p>

        <SearchBar> </SearchBar>
      </Header>
      <CardBox>
        <Card></Card>
      </CardBox>
    </Container>
  );
}
