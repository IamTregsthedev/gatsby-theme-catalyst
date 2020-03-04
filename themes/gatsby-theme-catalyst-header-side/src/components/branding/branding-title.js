/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useContext } from "react"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { MobileContext } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"
import LinkWrapper from "./branding-link-wrapper"

const SiteTitle = () => {
  const { title } = useSiteMetadata()
  const [isNavOpen] = useContext(NavContext)
  const [isMobile] = useContext(MobileContext)

  return (
    <LinkWrapper>
      <Styled.h1
        as="span"
        sx={{
          color: isMobile && isNavOpen ? "header.textOpen" : "header.text",
          fontFamily: "siteTitle",
          whiteSpace: "nowrap",
          flex: "0 0 auto",
          m: 0,
          variant: "variants.siteTitle",
        }}
      >
        {title}
      </Styled.h1>
    </LinkWrapper>
  )
}

export default SiteTitle
