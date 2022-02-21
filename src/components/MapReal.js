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
    dataLayer: "theme-dream-reality",
    title: "",
  },
  {
    dataLayer: "impression",
    title: "Gefühl: ",
  },
  {
    dataLayer: "quality",
    title: "",
  },
  {
    dataLayer: "vision-kiezblocks_marker",
    title: "",
  },
  {
    dataLayer: "info",
    title: "",
  },
]

const MapReal = ({ activeMap, onClick }) => {
  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/annaeschi/cky49k53x53po15pcfsa6uhle",
      // [lng, lat]
      center: [13.38, 52.528],
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
      if (activeMap == 5) {
        activeData.map((item, key) => {
          map.setLayoutProperty(
            item[key].dataLayer + "_glow",
            "visibility",
            "visible"
          )
        })
      }
    })

    map.on("click", event => {
      const features = map.queryRenderedFeatures(event.point, {
        layers: [activeData[activeMap].dataLayer],
      })
      if (!features.length) {
        return
      }
      const feature = features[0]

      let lngLat
      if (activeMap === 4) {
        lngLat = feature.geometry.coordinates[0][0]
      } else {
        lngLat = feature.geometry.coordinates
      }

      let textInput
      if (activeMap === 4) {
        textInput = feature.properties.web
      } else {
        textInput = feature.properties.Annotation
      }

      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(lngLat)
        .setHTML(
          `<h3>${activeData[activeMap].title} 
          ${(() => {
            switch (feature.properties.Gefuehl) {
              case undefined:
                return ""
              default:
                return feature.properties.Gefuehl
            }
          })()}
          </h3 >
          
          <p>${textInput}</p>

          
          `
          //
          // ${(() => {
          //   switch (activeMap) {
          //     case 4:
          //       return < a href = "${feature.properties.web}" > Website </a >
          //     default:
          //       return feature.properties.Annotation
          //   }
          // })()}
        )
        .addTo(map)

      // map.panTo(feature.geometry.coordinates, { duration: 5000 })
    })

    setMap(map)

    return () => map.remove()
  }, [activeMap])

  return <div ref={mapContainerRef} style={mapContainerStyle} />
}

export default MapReal
