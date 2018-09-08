import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Menu from '../components/menu'
import './index.css'
import './layout.css'
import favicon from '../../src/favicon.png'

const Layout = ({ children, data }) => (
  <main>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'onut' },
        { name: 'keywords', content: 'onut, computational art, art' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href:`${favicon}`}
      ]}
    />
    <div id="grid">
        {children()}
        <Menu />
    </div>
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
