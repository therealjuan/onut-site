module.exports = {
  siteMetadata: {
    title: 'onut',
    description: 'onut',
    keywords: 'onut, computational art, art',
    menuLinks: [
      {
        name: 'manifesto',
        link: '/manifesto'
      },
      {
        name: 'experiments',
        link: '/experiments'
      },
      {
        name: 'contact',
        link: 'mailto:hello@onut.art'
      },
      {
        name: 'work',
        link: '/work'
      },
      {
        name: 'home',
        link: '/'
      }
    ]
  },
  plugins: ['gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-react-svg`,
    options: {
      rule: {
        include: /images/,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-125510208-1',
      head: false
    },
  }
  ],
}