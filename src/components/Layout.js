import React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import Buttons from "./Buttons"
import Content from "./Content"
import styled from "styled-components"
import Maps from "./Maps"
import OnboardingSteps from "./OnboardingSteps"

const LayoutComponent = styled.div`
  /* color: #000000; */
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  box-sizing: border-box;
`

const ButtonComponent = styled.div.attrs({
  className: "Buttons",
})`
  padding: 0;
  margin: 0;
`

const ContentComponent = styled.div.attrs({
  className: "Content",
})``

const BarComponent = styled.div`
  min-width: 450px;
  flex: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
`

const MapComponent = styled.div.attrs({
  className: "Map",
})`
  flex: 2;
  display: flex;
  /* background-color: #256077; */
`

const MapRealComponent = styled.div`
  width: 100%;
  /* position: absolute; */
  /* height: 100%; */
  /* top: 0;
  right: 0;
  bottom: 0; */
`

// const MapDreamComponent = styled.div`
//   position: absolute;
//   height: 100%;
//   width: 50%;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
// `

const OnboardingStepsComponent = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 11.5rem;
  z-index: 1;
`

const Layout = () => {
  const [activeLayer, setActiveLayer] = useState(0)

  const [activeLayerImp, setActiveLayerImp] = useState(0)

  const [activePlace, setActivePlace] = useState(0)

  const initialLocation = [13.38, 52.528, 11]

  const [currentLocation, setCurrentLocation] = useState(initialLocation)

  return (
    <>
      <OnboardingStepsComponent>
        <OnboardingSteps />
      </OnboardingStepsComponent>
      <LayoutComponent>
        <BarComponent>
          <h2>[T]räume deinen Kiez frei</h2>
          <ButtonComponent>
            <Buttons active={activeLayer} onClick={setActiveLayer} />
          </ButtonComponent>

          <ContentComponent>
            <Content
              className="Content"
              activeContent={activeLayer}
              activeState={activeLayerImp}
              setActiveLayer={setActiveLayer}
              onClick={setActiveLayerImp}
              activePlace={activePlace}
              setActivePlace={setActivePlace}
            />
          </ContentComponent>
        </BarComponent>

        <MapComponent>
          <MapRealComponent>
            <Maps
              activeLayer={activeLayer}
              activeLayerImp={activeLayerImp}
              currentLocation={currentLocation}
              setCurrentLocation={setCurrentLocation}
              activePlace={activePlace}
            />
          </MapRealComponent>
        </MapComponent>
      </LayoutComponent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
