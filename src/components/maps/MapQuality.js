import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "!mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYW5uYWVzY2hpIiwiYSI6ImNrd2MxOXVrbzFkd3cycXAyMDZrcDc2emQifQ.0XGXzCwiwZA8IavtBKBhbg"

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
}

const imgLink = [
  {
    position: "alex",
    link: "https://i.postimg.cc/7b8hv5gM/alex.jpg",
  },
  {
    dataLayer: "kap",
    title: "https://i.postimg.cc/g0YfSG6w/kap.jpg",
  },
]

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

const MapQuality = ({ activeMap, currentLocation, setLocation, activePlace }) => {
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
      map.setLayoutProperty("quality_flaechen", "visibility", "visible")
      map.setLayoutProperty(
        activeData[activeMap].dataLayer + "_streets",
        "visibility",
        "visible"
      )
      map.setLayoutProperty(
        activeData[activeMap].dataLayer + "_alex",
        "visibility",
        "visible"
      )
      map.setLayoutProperty(
        activeData[activeMap].dataLayer,
        "visibility",
        "visible"
      )
      map.setLayoutProperty(
        activeData[activeMap].dataLayer + "_kap",
        "visibility",
        "visible"
      )

    })

    map.on("moveend", () => {
      setLocation(getNewLocation(map.getCenter(), map.getZoom()))

      // if(activePlace===0){
      //   map.panTo([13.41, 52.52], { duration: 3000 })
      // } else if (activePlace === 1) {
      //   map.panTo([13.311, 52.508], { duration: 3000 })
      // }
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
        .setHTML(
          `
          <h4>Beobachtungspunkt</h4>
            <img src="${feature.properties.link}" width="160px"/>
          `
        )
        .addTo(map)
    })
    setMap(map)

    return () => map.remove()
  }, [activeMap, currentLocation, setLocation])

  return <div ref={mapContainerRef} style={mapContainerStyle} />
}

export default MapQuality
