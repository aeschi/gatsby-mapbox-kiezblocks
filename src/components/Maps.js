import React from "react"
import styled from "styled-components"
import MapThema from "./maps/MapThema"
import MapVision from "./maps/MapVision"
import MapInfo from "./maps/MapInfo"
import MapQuality from "./maps/MapQuality"
import MapImpressionenDream from "./maps/MapImpressionenDream"
import MapImpressionen from "./maps/MapImpressionen"

const MapsComponent = styled.div`
  h4 {
    line-height: 1.6rem;
  }

  p {
    line-height: 1.2rem;
    padding: 0;
    margin-bottom: 0.2rem;
  }
`

/* <Component isVisible={mapLayers.isMapRealActive ? 1 : 0} /> */
/* visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")}; */

const Maps = ({
  activeLayer,
  activeLayerImp,
  currentLocation,
  setCurrentLocation,
}) => {
  return (
    <MapsComponent>
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
    </MapsComponent>
  )
}

export default Maps
