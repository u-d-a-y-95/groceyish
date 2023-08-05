export const categoryFetcher = () =>
  fetch("/api/category").then((res) => res.json());

export const featureProductFetcher = () =>
  fetch("/api/product/features").then((res) => res.json());

export const productFetcher = (query: string) =>
  fetch(query).then((res) => res.json());
