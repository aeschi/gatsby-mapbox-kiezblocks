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
    dataLayer: "theme-dream",
  },
  {
    dataLayer: "theme-reality",
  },
  {
    dataLayer: "funktion",
  },
  {
    dataLayer: "dream",
  },
  {
    dataLayer: "vision-kiezblocks_marker",
  },
]

const MapReal = ({ activeMap }) => {
  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/annaeschi/cky49k53x53po15pcfsa6uhle",
      // [lng, lat]
      center: [13.416, 52.513],
      zoom: 11,
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
      // console.log(map.data)
      // if (map.getLayer("vision-kiezblocks_outline"))
      //   map.removeLayer("vision-kiezblocks_outline")
      // map.setLayoutProperty("vision-kiezblocks_outline", "visibility", "none")
    })

    map.on("render", () => {
      console.log("A render event occurred.")

      console.log(activeData[activeMap].dataLayer)
    })

    map.on("click", event => {
      const features = map.queryRenderedFeatures(event.point, {
        layers: ["dream"],
      })
      if (!features.length) {
        return
      }
      const feature = features[0]

      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>Gefühl: ${feature.properties.Gefuehl}</h3><p>${feature.properties.Annotation}</p>`
        )
        .addTo(map)

      map.setLayoutProperty(
        activeData[activeMap].dataLayer,
        "visibility",
        "none"
      )

      map.panTo(feature.geometry.coordinates, { duration: 5000 })
    })

    setMap(map)

    return () => map.remove()
  }, [activeMap])

  return <div ref={mapContainerRef} style={mapContainerStyle} />
}

export default MapReal
