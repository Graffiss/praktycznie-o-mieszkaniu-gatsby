import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Button from "../components/Button/Button"

const Title = styled.h1`
  color: #fbd35d;
  font-size: 90px;
`

const Wrapper = styled.div`
  display: flex;
`

const ContentWrapper = styled.div`
  text-align: center;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`

const ImageWrapper = styled.img`
  position: absolute;
  height: calc(100vh - 80px);
  bottom: 0;
  left: 0;
  object-fit: cover;
`

const Paragraph = styled.p`
  font-size: 32px;
  font-weight: 300;
`

const IndexPage = ({ data }) => (
  <Wrapper>
    <ContentWrapper>
      <ImageWrapper
        src={data.file.childImageSharp.fluid.src}
        srcSet={data.file.childImageSharp.fluid.srcSet}
        sizes={data.file.childImageSharp.fluid.sizes}
      />
    </ContentWrapper>
    <ContentWrapper>
      <Title>
        Praktycznie <br />o mieszkaniu
      </Title>
      {/* <Paragraph>
        Sprawdź jak możesz urządzić mieszkanie unikając błędów, o których nawet
        byś nie pomyślał!
      </Paragraph> */}
      <Link to="/contact">
        <Button>Wyślij zapytanie</Button>
      </Link>
    </ContentWrapper>
  </Wrapper>
)

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1567, quality: 90) {
          src
          srcSet
          sizes
        }
      }
    }
  }
`

export default IndexPage
