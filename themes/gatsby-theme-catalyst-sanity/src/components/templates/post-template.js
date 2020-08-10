/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import {
  SanityContent,
  SanityThemeProvider,
  useSanityConfig,
} from "gatsby-theme-catalyst-sanity"

const PostTemplate = ({ data, previous, next }) => {
  const post = data.sanityPost
  const { sanityPostPath } = useSanityConfig()
  const rootPath = sanityPostPath.replace(/\/*$/, `/`) //Ensure trailing slash
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title={post.title} />
        <Styled.h1>{post.title}</Styled.h1>
        <Styled.ul sx={{ display: "flex", listStyle: "none", p: 0, m: 0 }}>
          {post.categories.map((category) => (
            <Styled.li key={category.title} sx={{ mr: 3 }}>
              <Styled.a as={Link} to={`/categories/${category.slug.current}`}>
                {category.title}
              </Styled.a>
            </Styled.li>
          ))}
        </Styled.ul>
        <Styled.p>{post.date}</Styled.p>
        <SanityContent data={post._rawBody} />
        {previous && (
          <Styled.a
            as={Link}
            to={rootPath.concat(previous.slug.current.replace(/\/*$/, `/`))}
            rel="prev"
          >
            ← {previous.title}
          </Styled.a>
        )}
        {next && (
          <Styled.a
            as={Link}
            to={rootPath.concat(next.slug.current.replace(/\/*$/, `/`))}
            rel="next"
          >
            {next.title} →
          </Styled.a>
        )}
      </Layout>
    </SanityThemeProvider>
  )
}

export default PostTemplate
