import { gql } from '@apollo/client';

const productsQuery = gql`
  query ProductsQuery {
    productsQuery @rest(type: "ProductQuery", path: "") {
      products {
          name
          price
          nutrients {
              id
              amount
          }
      }
      config {
          tolerableUpperLimits {
              id
              amount
              unit
          }
          currency
      }
    }
  }
`;

export default productsQuery