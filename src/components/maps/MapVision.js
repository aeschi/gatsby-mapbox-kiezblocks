import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "!mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYW5uYWVzY2hpIiwiYSI6ImNrd2MxOXVrbzFkd3cycXAyMDZrcDc2emQifQ.0XGXzCwiwZA8IavtBKBhbg"

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
}

const activeData = [
  {
    dataLayer: "thema-dream-reality",
    title: "title",
  },
  {
    dataLayer: "impression_reality",
    title: "Gefühl: ",
  },
  {
    dataLayer: "quality",
    title: "",
  },
  {
    dataLayer: "vision-kiezblocks",
    title: "",
  },
  {
    dataLayer: "info",
    title: "",
  },
]


const MapVision = ({ activeMap, currentLocation, setLocation }) => {
  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)

  const getNewLocation = (mapCenter, mapZoom) => {
    if (mapCenter !== undefined) {
      currentLocation[0] = mapCenter.lng
      currentLocation[1] = mapCenter.lat
      currentLocation[2] = mapZoom
    }
    return currentLocation
  }
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/annaeschi/ckzxw4a57000615ntmvmxc271",
      // [lng, lat]
      center: [currentLocation[0], currentLocation[1]],
      zoom: currentLocation[2],
      minZoom: 9,
      maxZoom: 18,
    })

    map.addControl(
      new mapboxgl.NavigationControl({
        showCompass: false,
      }),
      "top-right"
    )

    map.on("load", () => {
      map.setLayoutProperty(
        activeData[activeMap].dataLayer,
        "visibility",
        "visible"
      )
      map.setLayoutProperty(
        activeData[activeMap].dataLayer + "_glow",
        "visibility",
        "visible"
      )
      map.easeTo({center: [13.421, 52.538], zoom: 10.9, duration: 3000});
    })
    

    map.on("moveend", () => {
      setLocation(
        getNewLocation(map.getCenter(), map.getZoom())
      )
    })

    map.on("click", event => {
      const features = map.queryRenderedFeatures(event.point, {
        layers: [activeData[activeMap].dataLayer] ,
      })

      if (!features.length) {
        return
      }
      const feature = features[0]

      let lngLat = feature.geometry.coordinates[0][0]
      const popup = new mapboxgl.Popup({ offset: [0, -10] })
        .setLngLat(lngLat)
        .setHTML(
          `<h4>${feature.properties.name}</h4 >

          <a href="${feature.properties._umap_options}" target="_blank" rel="noopener noreferrer">Link zur Website</a>
          `
      )
        
        .addTo(map)

      // map.panTo(feature.geometry.coordinates, { duration: 2500 })
    })

    setMap(map)

    return () => map.remove()
  }, [activeMap, currentLocation, setLocation])

  return <div ref={mapContainerRef} style={mapContainerStyle} />
}

export default MapVision
