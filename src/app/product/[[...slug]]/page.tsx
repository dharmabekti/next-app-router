import { use } from "react";

type ProductPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default function ProductPage({ params }: ProductPageProps) {
  const unwrappedParams = use(params); // Menggunakan React.use untuk unwrap
  const slug = unwrappedParams.slug;
  // const data = await getData();
  // console.log(data);

  return (
    <div>
      <h1>{slug ? "Detail Product Page" : "Product Page"}</h1>
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
