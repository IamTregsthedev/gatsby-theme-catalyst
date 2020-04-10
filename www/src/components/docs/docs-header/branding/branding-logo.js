/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import LinkWrapper from "./branding-link-wrapper"

const SiteLogo = () => {
  const { title, logo } = useSiteMetadata()
  const [isNavOpen] = useContext(NavContext)
  const {
    invertSiteLogo,
    displaySiteLogo,
    displaySiteLogoMobile,
  } = useCatalystConfig()
  const invertLogo = () => {
    if (invertSiteLogo) {
      return "invert(1)"
    } else {
      return "none"
    }
  }
  const displayLaptop = () => {
    if (displaySiteLogo) {
      return "block"
    } else {
      return "none"
    }
  }
  const displayPhone = () => {
    if (displaySiteLogoMobile) {
      return "block"
    } else {
      return "none"
    }
  }
  return (
    <LinkWrapper>
      <Img
        sx={{
          display: [displayPhone, null, displayLaptop, null, null],
          width: ["40px", null, "100px", null, null],
          filter: isNavOpen ? invertLogo : "none",
        }}
        fluid={logo}
        alt={title}
        imgStyle={{ objectFit: "contain" }}
      />
    </LinkWrapper>
  )
}

export default SiteLogo
