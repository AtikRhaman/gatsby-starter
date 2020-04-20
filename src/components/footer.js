import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Foooter = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p>Copyright by {data.site.siteMetadata.author} @ 2020</p>
    </footer>
  )
}
export default Foooter
