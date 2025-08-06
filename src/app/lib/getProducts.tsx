export default async function getProducts() {
  const api = "https://dummyjson.com/products?limit=200";
  const res = await fetch(api, { next: { revalidate: 3600}});
  return res.json();
}
