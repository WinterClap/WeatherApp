import styled from "styled-components"
import { Nav } from "../src/Components/nav"
import { motion } from "framer-motion"
import { SearchBar } from "./Components/home"

const AppContainer = styled.div`
  width: 100%;
  background-color: #19181f;
  min-height: 100vh;
  padding-top: 10px;
`
const BluredSpanObj = styled.span(props => ({ /** Pasar los styled como objetos en vez de como strings!! >:) */
  height: '100px',
  width: '100px',
  borderRadius: '50%',
  backgroundColor: props.backgroundColor,
  filter: 'blur(70px)',
  position: 'absolute',
  top: props.top+'px',
  right: props.right+'px',
  zIndex: '3',
}))

function Blurs () {
  return(
    <div>
      <BluredSpanObj backgroundColor = "rgba(137, 90, 3, 1)" top = "100"></BluredSpanObj>
      <BluredSpanObj backgroundColor = "rgba(189,47,252,1)" top = "800" right = "20"></BluredSpanObj>
    </div>
  )
}
/* function Blur (props) {
  const { blurIntensity}  = props

  return (
  <span style = {{
    borderRadius: `{50%}`,
    height: `{100px}`,
    color: `{#3a222b}`,
    filter: `blur(${blurIntensity}px)`
  }}>

    </span>
  )
} */

function App() {
  return (
    <AppContainer>
      <Blurs> </Blurs>
      <Nav> </Nav>
      <SearchBar />
    </AppContainer>
  );
}

export default App;
