export default async function getProducts() {
  const api = "https://dummyjson.com/products";
  const res = await fetch(api);
  return res.json();
}
