import React, { Component, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ColdBg from "./cold-bg2.jpg";
import WarmBg from "./warm-bg2.jpg";
import "../index.css";
import { Marginer } from "./Marginer/index";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
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
const api = {
  key: "4e55aa4c66c651940e57d444c79b6dfe",
  base: "https://api.openweathermap.org/data/2.5/",
  units: "metric",
};

const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 1000px;
  height: 768px;
  border-radius: 50px;
  background-image: url(${ColdBg});
  background-size: contain;
  background-position: bottom;
  box-shadow: 0px 0px 50px rgba(189, 47, 252, 0.2);
  padding: 10px;

  h1 {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 25px;
    padding: 0 10px 0 10px;
    backdrop-filter: blur(10px);
    margin: 30px auto;
    justify-self: center;
    align-self: flex-start;
    font-size: 2.7rem;
    color: #08242d;
    text-align: center;
  }
  p {
    text-align: center;
    color: #08242d;
    font-size: 1.2rem;
  }
`;
const WeatherImg = styled.div`
  margin: auto;
  padding: 0;
  width: 100px;
  height: 100px;
  background-image: url(${(props) => `https://openweathermap.org/img/wn/${props.bg}` + "@2x.png"}); /*url(${(props) =>
    props.bg});*/
  background-position: center;
  background-size: cover;
`;
const Box = styled(motion.div)`
  border-radius: 25px;
  margin: 10px auto;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  header {
    font-size: 3.2rem;
    text-align: center;
    font-weight: 500;
  }
  h2 {
    font-size: 1.3rem;
    color: #08242d;
    filter: none;
    margin: 0;
    margin-bottom: 5px;
    text-align: center;
  }
  h3 {
    span {
      margin-left: 15px;
    }
    display: flex;
    justify-content: space-around;
    font-size: 1.2rem;
    text-align: center;
  }
  h4 {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;
const Row = styled(motion.div)`
  display: flex;
  border: 1px solid white;
  margin: 10px;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const CenterColumn = styled(motion.div)`
  display: flex;
  min-width: 35%;
  max-width: 40%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 550px;
  margin: 0;
`;
const LeftColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 140px;
  min-width: 120px;
  margin: 0;
`;
const RightColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 33%;
  min-width: 30%;
  margin: 0;
`;
function capitalize(str) {
  let arr = str.split("");
  let capital = arr[0].toUpperCase();
  arr.shift();
  let rest = arr.join("");
  let joining = capital + rest;
  return joining;
}
function Boxes({
  cityName,
  l_lon,
  l_lat,
  w_main,
  w_description,
  w_icon,
  m_cTemp,
  m_cTempFeelsLike,
  m_cTempMin,
  m_cTempMax,
  m_PaPreassure,
  m_humidity,
  m_seaLevel,
  wind_speed,
  clouds_cloudinessPercentage,
  country_code,
}) {
  return (
    <CardContainer
      imag="ColdBg"
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <h1>
        {cityName}, {country_code} <br />
        <p>
          Latitude: {l_lat}, Longitude: {l_lon}
        </p>
      </h1>
      <Row>
        {/*         <LeftColumn>
          <Box> asdasd 1 </Box>
          <Box> asdasd 2asdasdasdasdasd</Box>
          <Box> asdasd 3 </Box>
        </LeftColumn> */}
        <LeftColumn>
          <Box>
            <WeatherImg bg={w_icon}></WeatherImg>
            <h2> {w_main}</h2>
            <h3>{capitalize(w_description)}</h3>
          </Box>
        </LeftColumn>
        <CenterColumn>
          <Box>
            <h3>
              Temperature
              <span className="material-icons md-light md-36 ">thermostat</span>
            </h3>
            <header> {m_cTemp} °C</header>
            <h3>Feels Like</h3>
            <header> {m_cTempFeelsLike} °C</header>
            <h3>Min. Temperature</h3>
            <h4>{m_cTempMin} °C</h4>
            <h3>Max. Temperature</h3>
            <h4>{m_cTempMax} °C </h4>
          </Box>
        </CenterColumn>
        <RightColumn>
          <Box>
            <h3>
              Humidity
              <span className="material-icons md-light md-36">ac_unit</span>{" "}
            </h3>
            <h4> {m_humidity} % </h4>
            <h3>Preassure</h3>

            <h4>{m_PaPreassure} Pa</h4>
          </Box>
          <Box>
            <h3>
              Sea Level <span className="material-icons md-light md-36">horizontal_distribute</span>
            </h3>
            <h4> {m_seaLevel} m</h4>
          </Box>
          <Box>
            <h3>
              Cloudiness
              <span className="material-icons md-light md-36">cloud</span>
            </h3>
            <h4> {clouds_cloudinessPercentage} % </h4>
          </Box>
          <Box>
            <h3>
              Wind Speed <span className="material-icons md-light md-36">air</span>
            </h3>
            <h4>{wind_speed} m/s</h4>
          </Box>
        </RightColumn>
      </Row>
    </CardContainer>
  );
}

export class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      result: undefined,
    };
    this.search = this.search.bind(this);
  }

  search = (evt) => {
    if (evt.key === "Enter") {
      console.log(`${api.base}weather?q=${this.state.query}&units=${api.units}&appid=${api.key}`);
      fetch(`${api.base}weather?q=${this.state.query}&units=${api.units}&appid=${api.key}`)
        .then((res) => res.json())
        .then((Result) => {
          this.setState({ query: "", result: Result });
          console.log(this.state.result);
        });
    }
  };
  /*   rain_hourVolume_mm={
                  typeof this.state.result.rain["1h"] !== "undefined" ? this.state.result.rain["1h"] : "N/A"
                } */
  render() {
    return (
      <div>
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

            <Input
              type="text"
              placeholder="Type a city"
              name="txtCity"
              onChange={(e) => (this.setState({ query: e.target.value }), console.log(e.target.value))}
              initial={{ opacity: 0 }}
              onKeyPress={this.search}
              value={this.state.query}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileFocus={{ scale: 0.98, transition: 0.2 }}
            ></Input>
          </Header>
          {console.log(typeof this.state.result)}
          {typeof this.state.result !== "undefined" ? (
            <CardBox>
              <Boxes
                cityName={this.state.result.name}
                l_lon={this.state.result.coord.lon}
                l_lat={this.state.result.coord.lat}
                w_main={this.state.result.weather[0].main}
                w_description={this.state.result.weather[0].description}
                w_icon={this.state.result.weather[0].icon}
                m_cTemp={this.state.result.main.temp}
                m_cTempFeelsLike={this.state.result.main.feels_like}
                m_cTempMin={this.state.result.main.temp_min}
                m_cTempMax={this.state.result.main.temp_max}
                m_PaPreassure={this.state.result.main.pressure}
                m_humidity={this.state.result.main.humidity}
                m_seaLevel={this.state.result.main.sea_level ? this.state.result.main.sea_level : "N/A"}
                wind_speed={this.state.result.wind.speed}
                clouds_cloudinessPercentage={this.state.result.clouds.all}
                country_code={this.state.result.sys.country}
              ></Boxes>
            </CardBox>
          ) : (
            ""
          )}
        </Container>
      </div>
    );
  }
}
