module.exports = {
  siteMetadata: {
    title: `Chanon Roy`,
    description: `Chanon Roy, a software developer from Canada`,
    author: `@chanonroy`,
  },
  plugins: [
    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-74820007-1',
      },
    },
    // TypeScript
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    // Google Fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans`],
        display: 'swap',
      },
    },
    // Head Data
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // TODO: What do these do?
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Manifest Data
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chanon-roy-portfolio`,
        short_name: `chanon`,
        start_url: `/`,
        background_color: `#1e5799`,
        theme_color: `#1e5799`,
        display: `minimal-ui`,
        icon: `src/images/roy.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
