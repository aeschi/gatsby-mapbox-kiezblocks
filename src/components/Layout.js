import React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import Buttons from "./Buttons"
import ButtonSwitch from "./ButtonSwitch"
import Content from "./Content"
import MapImpressionen from "./maps/MapImpressionen"
import styled from "styled-components"
import MapThema from "./maps/MapThema"
import MapVision from "./maps/MapVision"
import MapInfo from "./maps/MapInfo"
import MapQuality from "./maps/MapQuality"
import MapImpressionenDream from "./maps/MapImpressionenDream"

const LayoutComponent = styled.div`
  /* color: #000000; */
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  box-sizing: border-box;
`

const BarComponent = styled.div`
  min-width: 550px;
  flex: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  h1 {
    text-transform: uppercase;
  }
`

const MapComponent = styled.div`
  flex: 2;
  display: flex;
  /* background-color: #256077; */
`

const MapRealComponent = styled.div`
  /* position: absolute; */
  /* height: 100%; */
  width: 100%;
  /* width: 65.25%; */
  /* top: 0;
  right: 0;
  bottom: 0; */
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`

const MapDreamComponent = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0;
  right: 0;
  bottom: 0;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`

const ButtonSwitchComponent = styled.div`
  /* flex: 2;
  display: flex; */
  /* position: absolute; */
  /* top: 10px;
  left: 10px; */
`

const Layout = () => {
  const [mapLayers, setMapLayers] = useState({
    isMapRealActive: true,
    isMapDreamActive: false,
  })

  const [activeLayer, setActiveLayer] = useState(0)

  const [activeLayerImp, setActiveLayerImp] = useState(0)

  const initialLocation = [13.38, 52.528, 11.0]

  const [currentLocation, setCurrentLocation] = useState(initialLocation)

  return (
    <LayoutComponent>
      <BarComponent>
        <h2>[T]räume deinen Kiez frei</h2>
        <Buttons active={activeLayer} onClick={setActiveLayer} />
        <Content activeContent={activeLayer} activeState={activeLayerImp} />
        <ButtonSwitchComponent>
          {activeLayer === 1 && (
            <ButtonSwitch active={activeLayerImp} onClick={setActiveLayerImp} />
          )}
        </ButtonSwitchComponent>
      </BarComponent>

      <MapComponent>
        <MapRealComponent isVisible={mapLayers.isMapRealActive ? 1 : 0}>
          {activeLayer === 0 && (
            <MapThema
              activeMap={activeLayer}
              currentLocation={currentLocation}
              setLocation={setCurrentLocation}
            />
          )}
          {activeLayer === 1 && activeLayer !== activeLayerImp && (
            <MapImpressionen
              activeMap={activeLayer}
              currentLocation={currentLocation}
              setLocation={setCurrentLocation}
            />
          )}
          {activeLayer === 1 && activeLayer === activeLayerImp && (
            <MapImpressionenDream
              activeMap={activeLayer}
              currentLocation={currentLocation}
              setLocation={setCurrentLocation}
            />
          )}

          {activeLayer === 2 && (
            <MapQuality
              activeMap={activeLayer}
              currentLocation={currentLocation}
              setLocation={setCurrentLocation}
            />
          )}
          {activeLayer === 3 && (
            <MapVision
              activeMap={activeLayer}
              currentLocation={currentLocation}
              setLocation={setCurrentLocation}
            />
          )}
          {activeLayer === 4 && (
            <MapInfo
              activeMap={activeLayer}
              currentLocation={currentLocation}
              setLocation={setCurrentLocation}
            />
          )}
        </MapRealComponent>
      </MapComponent>
    </LayoutComponent>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
