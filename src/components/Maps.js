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

  section {
    line-height: 1.2rem;
    padding: 0;
    margin-bottom: 0.2rem;

    font-size: 12px;
  }
`

const MapThemaComponent = styled.div`
  /* .mapboxgl-popup-close-button {
    display: none;
  } */

  .mapboxgl-popup-content {
    /* font: 400 15px/22px "Source Sans Pro", "Helvetica Neue", sans-serif; */
    /* padding: 0; */
    /* width: 180px; */
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.008);
  }

  .mapboxgl-popup-content h3 {
    /* background: #91c949;
    color: #fff;
    margin: 0;
    padding: 10px;
    border-radius: 3px 3px 0 0;
    font-weight: 700;
    margin-top: -15px; */
  }

  .mapboxgl-popup-content h4 {
    /* margin: 0;
    padding: 10px;
    font-weight: 400; */
    /* background: #91c949; */
  }

  .mapboxgl-popup-content div {
    /* padding: 10px; */
  }

  .mapboxgl-popup-anchor-top > .mapboxgl-popup-content {
    /* margin-top: 15px; */
  }

  .mapboxgl-popup-anchor-top > .mapboxgl-popup-tip {
    border-bottom-color: #91c949;
  }
`

/* <Component isVisible={mapLayers.isMapRealActive ? 1 : 0} /> */
/* visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")}; */

const Maps = ({
  activeLayer,
  activeLayerImp,
  currentLocation,
  setCurrentLocation,
  activePlace
}) => {
  return (
    <MapsComponent>
      {activeLayer === 0 && (
        <MapThemaComponent>
          <MapThema
            activeMap={activeLayer}
            currentLocation={currentLocation}
            setLocation={setCurrentLocation}
          />
        </MapThemaComponent>
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
          activePlace={activePlace}
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
