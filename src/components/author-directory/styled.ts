import {
  screenMdMin,
  screenLgMin,
  screenXlMin,
  screenXsMin,
} from "@/utils/constants"
import Link from "next/link"
import styled from "styled-components"

export const StyledAuthorLink = styled(Link)<{ $homepage: string }>`
  font-family: "Alverata Medium";
  text-transform: uppercase;
  font-size: 32px;
  ${(props) =>
    props.$homepage === "true" &&
    `color: var(--color-transparent-black);

    &:hover {
      color: var(--color-black);
    }`}

  /* larger phones  */
  @media only screen and (min-width: ${screenXsMin}) {
    font-size: 40px;
  }

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    font-size: 80px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    font-size: 100px;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    font-size: 120px;
  }

  &:hover {
    text-shadow: 0px 0px 19.1px #96649b;
  }
`

export const AuthorDirectoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8em 0 2em 0;

  @media only screen and (min-width: ${screenMdMin}) {
    padding: 4em 0 4em 0;
  }
`
