import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const ContactPage = () => {
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
    <div>
      <Layout>
        <h1>Contact Me</h1>
        <p1>{data.site.siteMetadata.pageDescription}</p1>
      </Layout>
    </div>
  )
}
export default ContactPage
