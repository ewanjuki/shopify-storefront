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
