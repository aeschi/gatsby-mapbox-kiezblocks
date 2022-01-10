import React from "react"
import { func, shape, bool } from "prop-types"

const getNewMapLayers = (activeLayer, mapLayers) => {
  switch (activeLayer) {
    case "isMapRealActive":
      return {
        ...mapLayers, //object spread
        isMapRealActive: (mapLayers.isMapRealActive = true),
        isMapDreamActive: (mapLayers.isMapDreamActive = false),
      }
    case "isMapDreamActive":
      return {
        ...mapLayers, //object spread
        isMapDreamActive: (mapLayers.isMapDreamActive = true),
        isMapRealActive: (mapLayers.isMapRealActive = false),
      }
    default:
      return mapLayers
  }
}

const Toggle = ({ mapLayers, setMapLayers }) => {
  const toggleMapLayers = activeLayer => {
    const newMapLayers = getNewMapLayers(activeLayer, mapLayers)
    setMapLayers(newMapLayers)
  }

  return (
    <div>
      <button
        type="Button"
        onClick={() => toggleMapLayers("isMapRealActive")}
      >
        Real
      </button>
      <button
        type="Button"
        onClick={() => toggleMapLayers("isMapDreamActive")}
      >
        Dream
      </button>
    </div>
  )
}

Toggle.propTypes = {
  setMapLayers: func.isRequired, // func für functions
  mapLayers: shape({
    // spezifisches Objekt
    isMapRealActive: bool.isRequired,
    isMapDreamActive: bool.isRequired,
  }),
}

export default Toggle
