module.exports = {
  siteMetadata: {
    title: 'onut',
  },
  plugins: ['gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-125510208-1',
      head: false
    },
  }
  ],
}