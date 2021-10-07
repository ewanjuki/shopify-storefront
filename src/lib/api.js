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
