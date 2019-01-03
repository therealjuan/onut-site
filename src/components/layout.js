import React from 'react'
import Helmet from 'react-helmet'
import Menu from './menu'
import './index.css'
import './layout.css'
import favicon from '../../src/favicon.png'
import { StaticQuery } from 'gatsby';

export default({ children }) => (
<StaticQuery
  query={
    graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
            keywords
            menuLinks {
              name
              link
            }
          }
        }
      }
  `}
  render={data => (
  <main>
    <Helmet
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      defaultTitle={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: data.site.siteMetadata.description },
        {
          name: 'keywords',
          content: data.site.siteMetadata.keywords }
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href:`${favicon}`}
      ]}
    />
    <div id="grid">
        <Menu menuLinks={data.site.siteMetadata.menuLinks} />
        <section id="main-content">
          {children}
        </section>
    </div>
  </main>
  )}
/>)