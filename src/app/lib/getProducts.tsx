export default async function getProducts() {
  const api = "https://dummyjson.com/products";
  const res = await fetch(api, { next: { revalidate: 3600}});
  return res.json();
}
