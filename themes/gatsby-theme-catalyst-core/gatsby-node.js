const { createContentDigest } = require(`gatsby-core-utils`)
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

// Setup for gatsby-remark-relative-images
exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

//Schema generation for Catalust Config

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`type CatalystConfig implements Node {
    contentPath: String!
    assetPath: String!
    displaySiteLogo: Boolean!
    displaySiteTitle: Boolean!
    displaySiteLogoMobile: Boolean!
    displaySiteTitleMobile: Boolean!
    invertSiteLogo: Boolean!
    mobileMenuBreakpoint: String!
    useStickyHeader: Boolean!
    useSocialLinks: Boolean!
    useColorMode: Boolean!
    useReactHeadroom: Boolean!
    footerContentLocation: String!
  }`)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  {
    contentPath = "content/pages",
    assetPath = "content/assets",
    displaySiteLogo = true,
    displaySiteTitle = true,
    displaySiteLogoMobile = true,
    displaySiteTitleMobile = true,
    invertSiteLogo = false,
    mobileMenuBreakpoint = "768px",
    useStickyHeader = false,
    useSocialLinks = true,
    useColorMode = true,
    footerContentLocation = "left",
    useReactHeadroom = false,
  }
) => {
  // create garden data from plugin config
  const catalystConfigFieldData = {
    contentPath,
    assetPath,
    displaySiteLogo,
    displaySiteTitle,
    displaySiteLogoMobile,
    displaySiteTitleMobile,
    invertSiteLogo,
    mobileMenuBreakpoint,
    useStickyHeader,
    useSocialLinks,
    useColorMode,
    footerContentLocation,
    useReactHeadroom,
  }
  createNode({
    ...catalystConfigFieldData,
    id: `gatsby-theme-catalyst-config`,
    parent: null,
    children: [],
    internal: {
      type: `CatalystConfig`,
      contentDigest: createContentDigest(catalystConfigFieldData),
      content: JSON.stringify(catalystConfigFieldData),
      description: `Catalyst Config`,
    },
  })
}
