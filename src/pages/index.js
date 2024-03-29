import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          pageDescription
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>This is home page</h1>
      <p1>{data.site.siteMetadata.pageDescription}</p1>
    </Layout>
  )
}

export default IndexPage
