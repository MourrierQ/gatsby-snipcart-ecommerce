import React from 'react'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import slugify from 'slugify';

const ProductStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 20px;
  margin-top: 200px;
  max-height: 400px;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  

  .gatsby-image-wrapper {
    grid-row: span 3;
    justify-self: center;
    width: 250px;
    margin: 20px;
  }

  .product-footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 3rem;
    border-top: 2px solid var(--grey);
    padding: 1rem;

    button {
    font-size: 3rem;
    }

    p {
      justify-self: center;
    }
  }
`

export default function ProductTemplate({data: {product}}) {
  const slug = slugify(product.name, {remove: /[*+~.()'"!:@]/g});
  console.log(slug);
  console.log(product)
  return (
    <div>
      <ProductStyles>
        <Img fluid={product.image.fluid}/>
        <h1>{product.name}</h1>
        <p>{product.productDescription.productDescription}</p>
        <div className="product-footer">
          <p>{product.price}€</p>
          <button type="button"     
            className="snipcart-add-item"
            data-item-id={product.id}
            data-item-image={product.image.fluid.src}
            data-item-price={`${product.price}`}
            data-item-url={`https://d37057d189eb.ngrok.io/products/${slug}`}
            data-item-name={product.name}>Add to Cart</button>
        </div>
      </ProductStyles>
    </div>
  )
}

export const query = graphql`
  query($productId: String!) {
    product: contentfulProduct(id: { eq: $productId }) {
      name
      id
      price
      productDescription {
        productDescription
      }
      image {
        fluid(maxWidth: 250, maxHeight: 400){
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

