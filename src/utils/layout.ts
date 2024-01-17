import styled from "styled-components"
import { screenMdMin } from "./constants"

// shared grid base
export const SharedGridMain = styled.main`
  display: grid;

  min-height: 100vh;
  @supports (min-height: 100dvh) {
    min-height: 100dvh;
  }
`

// spacers with funny names
export const LittleGuy = styled.div`
  min-height: 1em;
  width: 100%;
`

export const MediumGuy = styled.div`
  min-height: 1.5em;
  width: 100%;
`

export const BigGuy = styled.div`
  min-height: 2em;
  width: 100%;
`

export const HugeGuy = styled.div`
  min-height: 4em;
  width: 100%;
`

export const ArticleContainerStyles = styled.div`
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  font-family: "Alverata Light";
`

export const CaptionContainer = styled.div`
  font-size: 16px;
  padding-top: 4px;
  padding-bottom: 2em;

  @media only screen and (min-width: ${screenMdMin}) {
    font-size: 16px;
  }
`
