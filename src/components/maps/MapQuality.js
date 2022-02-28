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
    dataLayer: "quality_area",
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

const MapQuality = ({
  activeMap,
  currentLocation,
  setLocation,
  activePlace,
}) => {
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
        activeData[activeMap].dataLayer + "_area",
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
    })

    if (activePlace === 0) {
      map.easeTo({ center: [13.41, 52.52], zoom: 14, duration: 3000 })
    } else if (activePlace === 1) {
      map.easeTo({ center: [13.311, 52.508], zoom: 14, duration: 3000 })
    }
    console.log(activePlace)

    map.on("click", event => {
      const featuresStreet = map.queryRenderedFeatures(event.point, {
        layers: [activeData[activeMap].dataLayer],
      })

      if (!featuresStreet.length) {
        return
      }
      const featureStreet = featuresStreet[0]
      let lngLatStreet = featureStreet.geometry.coordinates[0]

      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(lngLatStreet)
        .setHTML(
          `
          <p>Gefühl: ${featureStreet.properties.Input}</p >
            <p>${featureStreet.properties.Tags}</p>
          `
        )
        .addTo(map)
    })
    setMap(map)

    map.on("click", event => {
      const featuresArea = map.queryRenderedFeatures(event.point, {
        layers: [activeData[3].dataLayer],
      })
      if (!featuresArea.length) {
        return
      }

      const featureArea = featuresArea[0]
      let lngLatArea = featureArea.geometry.coordinates[0][0]

      const popupArea = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(lngLatArea)
        .setHTML(
          `
          <p>Gefühl: ${featureArea.properties.Input}</p >
            <p>${featureArea.properties.Tags}</p>
          `
        )
        .addTo(map)

      // const popup = new mapboxgl.Popup({ offset: [0, -15] })
      //   .setLngLat(lngLat)
      //   .setHTML(
      //     `
      //     <h4>Beobachtungspunkt</h4>
      //       <img src="${feature.properties.link}" width="160px"/>
      //     `
      //   )
      //   .addTo(map)
    })
    setMap(map)

    return () => map.remove()
  }, [activeMap, currentLocation, setLocation, activePlace])

  return <div ref={mapContainerRef} style={mapContainerStyle} />
}

export default MapQuality
