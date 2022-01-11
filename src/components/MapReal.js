import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "!mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYW5uYWVzY2hpIiwiYSI6ImNrd2MxOXVrbzFkd3cycXAyMDZrcDc2emQifQ.0XGXzCwiwZA8IavtBKBhbg"

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
}

const MapReal = () => {
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
    })

    map.addControl(
      new mapboxgl.NavigationControl({
        showCompass: false,
      }),
      "top-right"
    )

    map.on("load", () => {
      // Add an image to use as a custom marker
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        (error, image) => {
          if (error) throw error
          map.addImage("custom-marker", image)

          // Add a GeoJSON source
          map.addSource("feelings", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              name: "A2_Export",
              features: [
                {
                  type: "Feature",
                  properties: {
                    descriptio:
                      "Allee, Straße, hohe alte Häuser, teilweise schon renoviert.",
                    Gefühl: "indifferent",
                    Stichwort: 0,
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [13.337853, 52.497706],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    descriptio:
                      "Am Wochenende steht hier immer ein Gemüsestand. Ich kaufe zwar nicht oft bei ihm, aber das merkantile Treiben auf der Straße gefällt mir.",
                    Gefühl:
                      "Erinnerungen an den Wochenmarkt in meinem Heimatstädtchen",
                    Stichwort: 0,
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [13.384759, 52.484355],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    descriptio: "Ampel überquert.",
                    Gefühl: "zielstrebig.",
                    Stichwort: 0,
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [13.339634, 52.499771],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    descriptio:
                      "Angekommen im Backaro Ich genieße den Kaffee auf dem Gehweg unter den Bäumen. Ich denke mir, dass es bei uns der Straße so viel Platz für Bäume geben würde. Wären die vielen Autos nicht, die chaotisch parken.",
                    Gefühl: "0",
                    Stichwort: 0,
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [13.461438, 52.518354],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    descriptio:
                      "Auf dem Markt tummeln sich viele Leute (mit Abstand und Maske) . Ein Glück fahren hier seit Corona keine Autos mehr und die Fläche wurde vergrößert. Ich gehe einmal herum",
                    Gefühl: "0",
                    Stichwort: 0,
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [13.460505, 52.510299],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    descriptio: "Baustelle.",
                    Gefühl: "indifferent.",
                    Stichwort: 0,
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [13.340373, 52.501986],
                  },
                },
              ],
            },
          })

          // Add a symbol layer
          // map.addLayer({
          //   id: "feelings",
          //   type: "symbol",
          //   source: "feelings",
          //   layout: {
          //     "icon-image": "custom-marker",
          //     // get the title name from the source's "title" property
          //     "text-field": ["get", "Gefühl"],
          //     "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          //     "text-offset": [0, 1.35],
          //     "text-anchor": "top",
          //   },
          // })
        }
      )
    })

    // create the popup
    // const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    //   "Construction on the Washington Monument began in 1848."
    // )

    // const marker1 = new mapboxgl.Marker()
    //   .setLngLat([13.326, 52.543])
    //   .setPopup(popup)
    //   .addTo(map)

    setMap(map)

    return () => map.remove()
  }, [])

  return <div ref={mapContainerRef} style={mapContainerStyle} />
}

export default MapReal
