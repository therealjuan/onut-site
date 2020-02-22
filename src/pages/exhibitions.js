import React from 'react'
import Layout from '../components/layout'

import './Exhibitions.css'

const ExhPage = ({ data, location }) => {

    const posts = data.allMarkdownRemark.edges

    return(
    <Layout location={location}>
    <div className="exhibitions-layout">
    {posts.map(({ node }) => {

        const exhibitionImageStyle = {
            backgroundImage: 'url(/' + node.frontmatter.image + ')'
        }

        return (
            <div className="exhibition" key={node.frontmatter.title}>
                <div className="exhibition-image" style={exhibitionImageStyle}>
                </div>
                <div className="exhibition-content">
                <h2 className="exhibition-exhibition">Exhibited at <a href={node.frontmatter.exhibitionLink} target="_blank" rel="noopener noreferrer">{node.frontmatter.title}</a></h2>
                <h3 className="exhibition-installation">{node.frontmatter.installation}</h3>
                    <h4 className="exhibition-details">{node.frontmatter.date} - {node.frontmatter.venue}. {node.frontmatter.city}</h4>
                <p className="exhibition-explanation">{node.rawMarkdownBody}</p>
                </div>
            </div>
        )
    })}

    </div>
    </Layout>
    )
}

export default ExhPage


export const exhibitionQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___id], order: DESC }) {
      edges {
        node {
          frontmatter {
            date
            title
            exhibitionLink
            installation
            venue
            city
            date
            image
          }
          rawMarkdownBody
        }
      }
    }
  }
`
