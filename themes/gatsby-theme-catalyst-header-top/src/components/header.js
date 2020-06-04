/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { useContext, Fragment } from "react"
import Branding from "./branding/branding"
import Nav from "./navbar/nav"
import MobileButton from "./navbar/nav-mobile-button"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
import Headroom from "react-headroom"

const SiteHeader = () => {
  const [isNavOpen] = useContext(NavContext)
  const { useStickyHeader } = useCatalystConfig()
  const useReactHeadroom = true
  const { theme } = useThemeUI()
  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children
  return (
    <ConditionalWrapper
      condition={useReactHeadroom}
      wrapper={(children) => (
        <Headroom sx={{ zIndex: "888" }}>{children}</Headroom>
      )}
    >
      <Fragment>
        <header
          sx={{
            display: "grid",
            position: useStickyHeader ? "sticky" : "static",
            top: 0,
            width: "100%",
            color: isNavOpen ? "header.textOpen" : "header.text",
            backgroundColor: isNavOpen
              ? "header.backgroundOpen"
              : "header.background",
            gridArea: "header",
            zIndex: "888", // Ensure the header is always on top
            variant: "variants.header",
          }}
          id="header"
        >
          <div
            sx={{
              gridRow: "1 / -1",
              gridColumn: "1 / -1",
              alignSelf: "start",
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gridTemplateRows: [
                theme.sizes.headerHeight + " 1fr",
                null,
                theme.sizes.headerHeight,
                null,
                null,
              ],
              maxWidth: "maxPageWidth",
              width: "100%",
              minHeight: isNavOpen ? "100vh" : "50px",
              m: "0 auto",
              px: [1, null, 3, null, null],
              py: [1, null, 2, null, null],
            }}
          >
            <Branding />
            <Nav />
            <MobileButton />
          </div>
        </header>
      </Fragment>
    </ConditionalWrapper>
  )
}

export default SiteHeader
