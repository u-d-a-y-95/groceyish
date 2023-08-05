export const categoryFetcher = () =>
  fetch("/api/category").then((res) => res.json());
