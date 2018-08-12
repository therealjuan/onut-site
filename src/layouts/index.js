import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'
import './layout.css'

const Layout = ({ children, data }) => (
  <main>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'onut' },
        { name: 'keywords', content: 'onut, computational art, art' },
      ]}
    />

    <section>
      {children()}
    </section>
  </main>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
