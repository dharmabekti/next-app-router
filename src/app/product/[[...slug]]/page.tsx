import { use } from "react";

type ProductPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

async function getData() {
  // fetch("https://fakestoreapi.com/products", { mode: "no-cors" })
  //   .then((res) => res.text()) // Gunakan `.text()` karena `json()` tidak akan berfungsi dalam mode `no-cors`
  //   .then((text) => console.log("Raw Response:", text))
  //   .catch((err) => console.error("Fetch Error:", err));
  const res = await fetch("");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function ProductPage({ params }: ProductPageProps) {
  const unwrappedParams = use(params); // Menggunakan React.use untuk unwrap
  const slug = unwrappedParams.slug;
  const products = await getData();

  return (
    <div>
      <h1>{slug ? "Detail Product Page" : "Product Page"}</h1>
      {products.length > 0 &&
        products.map((product: any) => (
          <div key={product.id}>
            <h4>{product.title}</h4>
          </div>
        ))}
      {slug && (
        <>
          <p>Category: {slug[0]}</p>
          <p>Gender: {slug[1]}</p>
          <p>Id: {slug[2]}</p>
        </>
      )}
    </div>
  );
}
