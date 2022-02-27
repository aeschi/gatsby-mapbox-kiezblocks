import React from "react"
import Dream from "./Dream"
import Reality from "./Reality"
import ButtonSwitch from "../ButtonSwitch"
import styled from "styled-components"

const ButtonSwitchComponent = styled.div`
  /* flex: 2;
  display: flex; */
  /* position: absolute; */
  /* top: 10px;
  left: 10px; */
`

const Impressionen = ({ activeState, onClick }) => {
  return (
    <>
      <div>
        <h3>Impressionen</h3>
        <p>
          <b>
            Entdecke auf der Karte von Berlin die subjektiven Lebensrealitäten
            sowie Träume von Bewohner:innen in Bezug auf ihre unmittelbare
            Wohnumgebung.
          </b>
        </p>
        <ButtonSwitchComponent>
          <ButtonSwitch activeState={activeState} onClick={onClick} />
        </ButtonSwitchComponent>
        {activeState === 0 && <Reality />}
        {activeState === 1 && <Dream />}
      </div>
    </>
  )
}

export default Impressionen
