import React from "react"
import Dream from "./Dream"
import Reality from "./Reality"
// import ButtonSwitch from "../ButtonSwitch"

const Impressionen = ({ activeState }) => {
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
        {activeState === 0 && <Reality />}
        {activeState === 1 && <Dream />}
      </div>
    </>
  )
}

export default Impressionen
