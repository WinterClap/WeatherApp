import { React, Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ColdBg from "./cold-bg2.jpg";
import WarmBg from "./warm-bg2.jpg";
import "../index.css";

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
  rain_hourVolume_mm,
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
            <WeatherImg bg={w_icon} /*`https://openweathermap.org/img/wn/${w_icon}@2x.png` */></WeatherImg>
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
              Rain Volume (Last Hour) <span className="material-icons md-light md-36">umbrella</span>
            </h3>
            <h4> {rain_hourVolume_mm} mm</h4>
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
export class Card extends Component {
  constructor() {
    super();
    this.state = {
      asd: 0,
    };
  }

  render() {
    return (
      <Boxes
        cityName="Pasto"
        l_lon="-77.2811"
        l_lat="1.2136"
        w_main="Rain"
        w_description="light rain"
        w_icon="10d"
        m_cTemp="11.37"
        m_cTempFeelsLike="10.99"
        m_cTempMin="11.37"
        m_cTempMax="11.37"
        m_PaPreassure="1018"
        m_humidity="93"
        m_seaLevel="1018"
        wind_speed="0.54"
        rain_hourVolume_mm="0.23"
        clouds_cloudinessPercentage="100"
        country_code="CO"
      ></Boxes>
    );
  }
}
