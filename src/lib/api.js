export const CONNECT_QUERY = `{
  shop {
      name
  }
}`;

export const COLLECTIONS_QUERY = `{
	collections(first: 10) {
		edges {
      node {
        id
        handle
        title
        image {
          altText
          transformedSrc(maxWidth: 400 maxHeight:400)
        }
        products(first: 1) {
          edges {
            node {
              images(first:1) {
                edges {
                  node {
                    transformedSrc(maxWidth:400 maxHeight: 400)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;

export const FETCH_FIRST_PRODUCTS = `{
  products(first: 4) {
    edges {
      cursor
      node {
        handle
        title
        images(first: 1) {
          edges {
            node {
              transformedSrc(maxWidth:400 maxHeight: 400)
            }
          }
        }
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
    pageInfo{
      hasNextPage
      hasPreviousPage      
    }
  }
}`;

export function fetchFirstProductsByCollHandle(handle) {
  return `{
    collection(handle: "${handle}") {
      products(first: 4){
        edges {
          cursor
          node {
            handle
            title
            images(first: 1){
              edges {
                node {
                  transformedSrc(maxWidth:400 maxHeight:400)
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }`
}

export function fetchNextProducts(cursor) {
  return `{
    products(first: 4 after: "${cursor}") {
      edges {
        cursor
        node {
          handle
          title
          images(first: 1) {
            edges {
              node {
                transformedSrc(maxWidth:400 maxHeight: 400)
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
      pageInfo{
        hasNextPage
        hasPreviousPage      
      }
    }
  }`;
}

export function fetchNextProductsByCollHandle(handle, cursor) {
  return `{
    collection(handle: "${handle}") {
      products(first: 4, after: "${cursor}"){
        edges {
          cursor
          node {
            handle
            title
            images(first: 1){
              edges {
                node {
                  transformedSrc(maxWidth:400 maxHeight:400)
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }`
}

export function fetchPreviousProducts(cursor) {
  return `{
    products(last: 4 before: "${cursor}") {
      edges {
        cursor
        node {
          handle
          title
          images(first: 1) {
            edges {
              node {
                transformedSrc(maxWidth:400 maxHeight: 400)
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
      pageInfo{
        hasNextPage
        hasPreviousPage      
      }
    }
  }`;
}

export function fetchPreviousProductsByCollHandle(handle, cursor) {
  return `{
    collection(handle: "${handle}") {
      products(last: 4 before: "${cursor}"){
        edges {
          cursor
          node {
            handle
            title
            images(first: 1){
              edges {
                node {
                  transformedSrc(maxWidth:400 maxHeight:400)
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }`
}

function apiCall(domain, token, query) {
  return fetch(`https://${domain}/api/2021-10/graphql.json`, {
    method: "POST",
    body: query,
    headers: {
      "X-Shopify-Storefront-Access-Token": token,
      "Content-Type": "application/graphql",
    },
  });
}

export default apiCall;
