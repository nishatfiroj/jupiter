"use client"

import React from "react"
import {
  StyledComponentsRegistry,
  DynamicHeader,
  MenuButton,
  Footer as BaseFooter,
} from ".."
import {
  Article,
  ArticleBaseContainer,
  Cover,
  Header,
  Footer,
  TitleContainer,
  NextFooter,
  FooterTitle,
  TriggerMenuContainer,
} from "./styled"
import { MobileMenuOverlay } from "../header/Mobile"
import Link from "next/link"
import { ArticleMetadata } from "@/utils/types"
import { useBreakpoints, useDisableScroll } from "@/utils/hooks"

export function ArticleBase({
  children,
  svg,
  position,
  next,
}: {
  children: React.ReactNode
  svg: React.ReactNode
  next: ArticleMetadata
  position?: string
}) {
  const [showHeader, setShowHeader] = React.useState(false)
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  const { isMobile } = useBreakpoints()

  const shouldPositionTitle = isMobile && position

  const shouldHaveDynamicHeader = showHeader && !isMobile

  // todo: dynamic menu is kind of broken and i'm tired so we're gonna time out the menu
  // -issues include animation, re rendering whole base page every time we toggle in and out, time out
  setTimeout(() => {
    setShowHeader(false)
  }, 5000)

  const handlePosition = () => {
    return shouldPositionTitle ? { margin: position } : { padding: position }
  }

  useDisableScroll(showMobileMenu)

  return (
    <StyledComponentsRegistry>
      {shouldHaveDynamicHeader ? (
        <Header>
          <DynamicHeaderMechanism />
        </Header>
      ) : null}
      {showMobileMenu ? (
        <MobileMenuOverlay onClose={() => setShowMobileMenu(false)} />
      ) : (
        <ArticleBaseContainer>
          <Cover>
            <TitleContainer style={handlePosition()}>{svg}</TitleContainer>
          </Cover>
          <Article>
            <div
              style={{
                position: "sticky",
                top: 0,
                display: "flex",
                justifyContent: "flex-end",
                padding: "1em",
                background:
                  "linear-gradient(180deg, rgba(232, 224, 222, 0.60) 0%, rgba(232, 224, 222, 0.00) 100%)",
              }}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <MenuButton />
            </div>

            {children}
          </Article>
          <Footer>
            <NextFooter>
              <FooterTitle href={next.link}>{next.title}</FooterTitle>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize: isMobile ? "16px" : "32px",
                  paddingTop: "16px",
                }}
              >
                <Link href={next.link}>Next</Link>
                <Link href={next.link}>{next.author}</Link>
              </div>
            </NextFooter>

            <BaseFooter />
          </Footer>
        </ArticleBaseContainer>
      )}
    </StyledComponentsRegistry>
  )
}

function DynamicHeaderMechanism() {
  const [showHeader, setShowHeader] = React.useState(false)
  // todo: dynamic menu is kind of broken and i'm tired so we're gonna time out the menu
  setTimeout(() => {
    setShowHeader(false)
  }, 5000)

  return showHeader ? (
    <DynamicHeader onClose={() => setShowHeader(false)} />
  ) : (
    <TriggerMenuContainer onMouseOver={() => setShowHeader(true)} />
  )
}
