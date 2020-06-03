import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/Navigation/Navigation"

import styled from "styled-components"

const IndexPage = () => (
  <>
    <Navigation />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </>
)

export default IndexPage
