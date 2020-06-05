import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import BlogPost from "../components/BlogPost/BlogPost"
import PageInfo from "../components/PageInfo/PageInfo"

const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`

const pageData = {
  title: "Blog",
  paragraph: `Projektowanie mieszkania nie kończy się na architekcie. Czy wszystko w Twoim mieszkaniu ma praktyczne zastosowanie?`,
}

const BlogPage = ({ data }) => {
  const {
    allMdx: { nodes },
  } = data

  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <BlogWrapper>
        {nodes.map(({ frontmatter: { title, slug, image }, excerpt }) => (
          <BlogPost
            key={slug}
            title={title}
            excerpt={excerpt}
            image={image.childImageSharp.fluid}
            slug={slug}
          />
        ))}
      </BlogWrapper>
    </>
  )
}

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          author
          image {
            childImageSharp {
              fluid(maxWidth: 640, maxHeight: 640) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`

export default BlogPage
