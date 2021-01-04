/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
import path from 'path'
import slugify from 'slugify'

async function turnProductsIntoPages({graphql, actions}){
  const productTemplate = path.resolve('./src/templates/ProductTemplate.js');
  const {data} = await graphql(`
  query {
    products: allContentfulProduct {
      nodes {
        name
        id
      }
    }
  }  
  `);
  data.products.nodes.forEach(product => {
    actions.createPage({
      path: `products/${slugify(product.name, {remove: /[*+~.()'"!:@]/g})}`,
      component: productTemplate,
      context: {
        productId: product.id
      }
    })
  });
}

export async function createPages(params){
  await Promise.all([
    turnProductsIntoPages(params)
  ])
}