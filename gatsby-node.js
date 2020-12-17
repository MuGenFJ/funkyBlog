const path = require("path")

//create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
  {
    blogs: allStrapiBlogs {
      nodes {
        slug
        tags
      }
      totalCount
    }
    cards: allStrapiCards {
      nodes {
        tags
      }
    }
  }
`)

result.data.blogs.nodes.forEach(blog => {
        createPage({
            path: `/blogs/${blog.slug}`,
            component: path.resolve(`src/templates/articleTemplate.js`),
            context: {
                slug: blog.slug,
            },
        })
    })
    
result.data.cards.nodes.forEach(card => {
  createPage({
    path: `/tag/${card.tags}`,
    component: path.resolve(`src/templates/tagPageTemplate.js`),
    context: {
      tag: card.tags
    }
  })
}) 

  // const perPage = 1;
  // const nbPage = Math.ceil(result.data.blogs.totalCount / perPage)

  
  // for (let i = 0; i < nbPage; i++) {
  //   createPage({
  //     path: i < 1 ? `/` : `/page${i + 1}`,
  //     component: path.resolve(`src/templates/indexTemplate.js`),
  //     context: {
  //       limit: perPage,
  //       skip: i * perPage,
  //       nbPage,
  //       currentPage: i + 1,
  //     },
  //   })
  // }
  
}




