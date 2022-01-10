module.exports = {
  pathPrefix: "/gatsby-mapbox-page",
  siteMetadata: {
    title: `Gatsby Mapbox Blog`,
    description: ``,
    author: `Erratic Generator`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-svgr-svgo`,
  ],
}