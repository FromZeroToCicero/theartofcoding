const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const {
    data: {
      allMdx: { edges: posts },
    },
  } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  posts.forEach(({ node }) => {
    const { slug } = node.frontmatter
    createPage({
      path: slug,
      component: path.resolve("./src/templates/post-template.js"),
      context: {
        slug,
      },
    })
  })
}
