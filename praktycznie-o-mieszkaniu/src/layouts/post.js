import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query queryBlogPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        author
        image {
          childImageSharp {
            fixed(width: 640) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`

const PostLayout = ({ data }) => {
  return (
    <div>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.author}</p>
      <Image fixed={data.mdx.frontmatter.image.childImageSharp.fixed} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  )
}

export default PostLayout
