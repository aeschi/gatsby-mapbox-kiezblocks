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

  .mapboxgl-popup-content {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }
`

const MapThemaComponent = styled.div`
  .mapboxgl-popup-close-button {
    display: none;
  }

  .mapboxgl-popup-content {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.01);
  }

  .mapboxgl-popup-anchor-top > .mapboxgl-popup-tip {
    border-bottom-color: #91c949;
  }
`

const MapQualityComponent = styled.div`

  .mapboxgl-popup-content {
    width: 400px;
  }

`


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
        <MapQualityComponent>
        <MapQuality
          activeMap={activeLayer}
          currentLocation={currentLocation}
          setLocation={setCurrentLocation}
          activePlace={activePlace}
          />
          </MapQualityComponent>
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
