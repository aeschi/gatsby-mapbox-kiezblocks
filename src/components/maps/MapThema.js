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

const MapThema = ({ activeMap, currentLocation, setLocation }) => {
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
      maxZoom: 12,
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
    })

    map.on("moveend", () => {
      setLocation(getNewLocation(map.getCenter(), map.getZoom()))
    })

    // load data as geojson instead?

    map.on("data", () => {
      let count = 0
      // console.log("data loaded")
      const id = setInterval(function () {
        // console.log("timer donw")
        // open random popup
        const features = map.queryRenderedFeatures({
          layers: [activeData[activeMap].dataLayer],
        })
        if (!features.length) {
          return
        }
          // console.log("features length")
          const feature = features[count]
          // console.log(features)

          const lngLat = feature.geometry.coordinates
          const popup = new mapboxgl.Popup({ offset: [0, -15] })
            .setLngLat(lngLat)
            .setHTML(
              `<p>${feature.properties.title}</p >
          `
            )
          popup.addTo(map)

          // map.panTo(feature.geometry.coordinates, { duration: 1000 })
        
        if (count < features.length - 1) {
          count++
        } else {
          clearInterval(id)
        }
      }, 750)
    })

    map.on("click", event => {
      const features = map.queryRenderedFeatures(event.point, {
        layers: [activeData[activeMap].dataLayer],
      })

      if (!features.length) {
        return
      }
      const feature = features[0]

      let lngLat = feature.geometry.coordinates

      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(lngLat)
        .setHTML(`<p>${feature.properties.title}</p >`)
        .addTo(map)
    })

    setMap(map)

    return () => map.remove()
  }, [activeMap, currentLocation, setLocation])

  return <div ref={mapContainerRef} style={mapContainerStyle} />
}

export default MapThema
