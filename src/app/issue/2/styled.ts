import {
  screenLgMax,
  screenLgMed,
  screenLgMin,
  screenMdMin,
  screenSmMin,
  screenXlMin,
} from "@/utils/constants"
import { SharedGridMain } from "@/utils/layout"
import Image from "next/image"
import styled from "styled-components"

// grid
export const Main = styled(SharedGridMain)`
  grid-template-columns: 1fr 2fr 3fr;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-template-areas:
    "lottie lottie lottie"
    "logo logo logo"
    "editorsNoteTitle editorsNoteTitle editorsNoteTitle"
    "editorsNote editorsNote editorsNote"
    "signatures signatures signatures"
    "content content content";
  font-family: "Alverata Light";
  p {
    font-size: 14px;
  }

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 29.49%, #000000 100%),
    radial-gradient(
        80.23% 5.14% at 80.23% 5.72%,
        rgba(0, 21, 52, 0) 27.1%,
        #040e21 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    #040921;

  @media only screen and (min-width: ${screenSmMin}) {
    grid-template-areas:
      "lottie lottie lottie"
      "logo logo logo"
      "editorsNoteTitle editorsNoteTitle editorsNote"
      "floatingMenu signatures editorsNote"
      "floatingMenu content content";
  }
`

export const LottieSection = styled.section`
  grid-area: lottie;
  position: relative;
`

export const LogoSection = styled.section`
  grid-area: logo;
  position: relative;
  display: flex;
  justify-content: center;
  padding-block-start: 24px;

  @media only screen and (min-width: ${screenMdMin}) {
    display: block;
    padding-inline-start: 32px;
    padding-block-end: 64px;
  }
`

export const EditorsNoteTitleSection = styled.section`
  grid-area: editorsNoteTitle;
  position: relative;
  font-size: 64px;
  line-height: 64px;
  text-transform: uppercase;
  text-align: center;
  padding-block-start: 16px;
  padding-block-end: 64px;

  @media only screen and (min-width: ${screenMdMin}) {
    text-align: right;
    padding-inline-end: 64px;
    margin-block-start: 56px;
  }
  @media only screen and (min-width: ${screenLgMed}) {
    font-size: 72px;
    line-height: 72px;
  }

  @media only screen and (min-width: ${screenXlMin}) {
    padding-inline-start: 376px;
    font-size: 96px;
    line-height: 96px;
  }
`

export const EditorsNoteSection = styled.section`
  grid-area: editorsNote;
  position: relative;

  display: flex;

  @media only screen and (min-width: ${screenMdMin}) {
    margin-inline-start: 16px;
    margin-inline-end: 64px;
    padding-block-start: 56px;
  }

  @media only screen and (min-width: ${screenLgMin}) {
    max-width: 602px;
    margin: auto;
    justify-content: center;
    font-size: 18px;
  }

  @media only screen and (min-width: ${screenXlMin}) {
    max-width: 528px;
    margin: auto;
    justify-content: center;
    font-size: 18px;
  }
`

export const ContentSection = styled.section`
  grid-area: content;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FloatingMenuSection = styled.section`
  grid-area: floatingMenu;
  margin-inline-start: 64px;
  display: none;
  @media only screen and (min-width: ${screenSmMin}) {
    display: block;
  }
`

export const SignaturesSection = styled.section`
  grid-area: signatures;
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  flex-direction: column;
`

export const SignatureContainer = styled(Image)`
  width: 100px;
  height: 100%;
  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    width: 150px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    width: 150px;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    width: 200px;
  }
`

export const StyledAuthorLink = styled.a<{ $homepage: string }>`
  font-family: "Alverata Medium";
  text-transform: uppercase;
  font-size: 32px;
  text-align: center;
  margin: 16px;
  line-height: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  ${(props) =>
    props.$homepage === "true" &&
    `color: var(--color-transparent-white);

    &:hover {
      color: var(--color-white);
      transition: 0.5s;
    }`};

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    align-items: center;
  }
`

export const AuthorText = styled.h2`
  max-width: 544px;
  font-weight: 300;
  padding-bottom: 4px;

  font-size: 16px;
  line-height: 22px;
  text-align: left;

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    font-size: 24px;
    line-height: 22px;
    text-align: center;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMed}) {
    max-width: 640px;
    font-size: 28px;
    line-height: 30px;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    max-width: 744px;
    font-size: 36px;
    line-height: 32px;
  }
`

export const TitleText = styled.h1<{ $longTitle?: string }>`
  text-align: left;
  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    font-size: 56px;
    line-height: 52px;
    text-align: center;
    max-width: ${(props) => (props.$longTitle === "true" ? "648px" : "456px")};
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    max-width: 800px;
    font-size: 72px;
    line-height: 64px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMed}) {
    max-width: 900px;
    font-size: 72px;
    line-height: 64px;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    max-width: 1200px;
    font-size: 96px;
    line-height: 90px;
  }
`

export const AuthorDirectoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;

  padding: 8em 0 2em 0;

  @media only screen and (min-width: ${screenMdMin}) {
    padding: 4em 0 4em 0;
    align-items: center;
  }
`

export const ContributorCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-align: center;

  @media only screen and (min-width: ${screenMdMin}) {
    width: 316px;
  }

  @media only screen and (min-width: ${screenLgMin}) {
    width: 436px;
  }

  @media only screen and (min-width: ${screenLgMax}) {
    width: 395px;
  }
`

export const ContributorPhoto = styled(Image)`
  width: 100%;
  height: 316px;
  object-fit: cover;
`

export const ScrollerOuterContainer = styled.div`
  width: 100%;
`

export const ScrollerContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 8px;

  div {
    flex: 0 0 auto;
  }
`

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Row = styled.span`
  display: flex;
  white-space: pre-wrap;
  gap: 8px;
`

export const EllipseContainer = styled.div<{ $longTitle?: string }>`
  position: absolute;
  top: ${(props) => (props.$longTitle === "true" ? `0px` : `-100px`)};
  left: -180px;
`

export const ColophonContainer = styled.div`
  font-family: Alverata Light;
  display: flex;

  flex-direction: column;

  @media only screen and (min-width: ${screenMdMin}) {
    font-family: Alverata Medium;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ColophonColumn = styled.div<{ $first?: string }>`
  font-family: Alverata Light;
  color: var(--color-off-white);
  ${(props) =>
    props.$first === "true"
      ? `
      @media only screen and (min-width: ${screenMdMin}) {
        max-width: 280px;
      }`
      : `
      @media only screen and (min-width: ${screenMdMin}) {
        max-width: 436px;
      }`}
`

export const ArticleContainer = styled.div`
  font-family: "Alverata Light";
  p,
  div {
    font-size: 16px;
    padding: 12px 0;
  }

  b {
    font-family: "Alverata Medium";
  }

  a {
    text-decoration: underline;
  }
`

export const ArticleImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const FooterContainer = styled.div`
  margin-top: 32px;
  border-top: 1px solid grey;
  max-width: 800px;
  font-size: 14px;
  line-height: 18px;
`

export const ContributorBody = styled.div`
  font-family: "Alverata Light";
  font-size: 16px;

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    font-size: 12px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    font-size: 16px;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    font-size: 20px;
  }
`
