import React from "react"
import Dream from "./Dream"
import Reality from "./Reality"
// import ButtonSwitch from "../ButtonSwitch"

const Impressionen = ({activeState }) => {
  return (
    <>
      <div>
        <h3>Impressionen</h3>
        {activeState === 0 && <Reality/>}
        {activeState === 1 && <Dream />} 
      </div>
    </>
  )
}

export default Impressionen
