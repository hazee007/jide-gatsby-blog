import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlockLink = styled(Link)`
  text-decoration: none;
`

const BlockTitle = styled.h3`
  margin-buttom: 20;
`

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Azeez's thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlockLink to={node.fields.slug}>
            <BlockTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
            </BlockTitle>
          </BlockLink>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
