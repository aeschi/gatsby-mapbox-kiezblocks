import React from "react"
import Thema from "./pages/Thema"
import Impressionen from "./pages/Impressionen"
import Quality from "./pages/Quality"
import Vision from "./pages/Vision"
import Info from "./pages/Info"


const Content = ({ activeContent, activeState}) => {
  return (
    <>
      <div>
        {activeContent === 0 && <Thema />}
        {activeContent === 1 && (
          <Impressionen activeState={activeState} />
        )}
        {activeContent === 2 && <Quality />}
        {activeContent === 3 && <Vision />}
        {activeContent === 4 && <Info />}
      </div>
    </>
  )
}

export default Content
