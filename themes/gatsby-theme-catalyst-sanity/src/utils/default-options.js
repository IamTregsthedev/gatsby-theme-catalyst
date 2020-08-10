module.exports = (themeOptions) => {
  const sanityCreatePages =
    themeOptions.sanityCreatePages == null ||
    themeOptions.sanityCreatePages === true
  const sanityCreatePosts =
    themeOptions.sanityCreatePosts == null ||
    themeOptions.sanityCreatePosts === true
  const sanityCreatePostsList =
    themeOptions.sanityCreatePostsList == null ||
    themeOptions.sanityCreatePostsList === true
  const sanityCreateProjects =
    themeOptions.sanityCreateProjects == null ||
    themeOptions.sanityCreateProjects === true
  const sanityCreateProjectsList =
    themeOptions.sanityCreateProjectsList == null ||
    themeOptions.sanityCreateProjectsList === true
  const sanityCreateCategories =
    themeOptions.sanityCreateCategories == null ||
    themeOptions.sanityCreateCategories === true
  const sanityProjectPath = themeOptions.sanityProjectPath || "/projects"
  const sanityProjectsListPath =
    themeOptions.sanityProjectsListPath || "/projects"
  const sanityPostPath = themeOptions.sanityPostPath || "/posts"
  const sanityPostsListPath = themeOptions.sanityPostsListPath || "/posts"

  return {
    sanityCreatePages,
    sanityCreatePosts,
    sanityCreatePostsList,
    sanityCreateProjects,
    sanityCreateProjectsList,
    sanityPostPath,
    sanityPostsListPath,
    sanityProjectPath,
    sanityProjectsListPath,
    sanityCreateCategories,
  }
}
