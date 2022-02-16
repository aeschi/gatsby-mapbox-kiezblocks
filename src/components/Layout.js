import React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import Toggle from "./Toggle"
import Buttons from "./Buttons"
import Content from "./Content"
// import { useStaticQuery, graphql } from "gatsby"
// import Header from "./Header"
import MapReal from "./MapReal"
import MapDream from "./MapDream"

import styled from "styled-components"

const LayoutComponent = styled.div`
  /* color: #000000; */
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  box-sizing: border-box;
`

const BarComponent = styled.div`
  min-width: 400px;
  flex: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  h1 {
    text-transform: uppercase;
  }
`

const MapComponent = styled.div`
  flex: 2;
  display: flex;
  background-color: #256077;
`

const MapRealComponent = styled.div`
  /* position: absolute; */
  /* height: 100%; */
  width: 100%;
  /* width: 65.25%; */
  /* top: 0;
  right: 0;
  bottom: 0; */
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`

const MapDreamComponent = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0;
  right: 0;
  bottom: 0;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`

const Layout = () => {
  const [mapLayers, setMapLayers] = useState({
    isMapRealActive: true,
    isMapDreamActive: false,
  })

  const [activeLayer, setActiveLayer] = useState(0)

  const maps = [
    {
      mapName: MapReal,
    },
    {
      mapName: MapDream,
    },
  ]
  // const MapComp = maps[activeLayer].mapName

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <LayoutComponent>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}

      <BarComponent>
        <h2>[T]räume deinen Kiez frei</h2>

        <Buttons active={activeLayer} onClick={setActiveLayer} />
        <Content activeContent={activeLayer} />
        {/* <Toggle mapLayers={mapLayers} setMapLayers={setMapLayers} /> */}
      </BarComponent>

      <MapComponent>
        <MapRealComponent isVisible={mapLayers.isMapRealActive ? 1 : 0}>
          <MapReal activeMap={activeLayer} onClick={setActiveLayer} />
          {/* <MapComp /> */}
        </MapRealComponent>
      </MapComponent>
    </LayoutComponent>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
