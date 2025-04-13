import { getData } from "@/services/products";
import Link from "next/link";

type ProductPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const products = await getData("https://fakestoreapi.com/products");
  console.log(products);

  return (
    <div className="grid grid-cols-5 gap-2 mt-5 place-items-center">
      {/* <h1>{slug ? "Detail Product Page" : "Product Page"}</h1> */}
      {products.length > 0 &&
        products.map((product: any) => (
          <Link
            href={`/product/detail/${product.id}`}
            key={product.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="p-8 rounded-t-lg object-cover h-96 w-full"
              src={product.image}
              alt="product image"
            />
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                {product.title}
              </h5>
              <div className="flex items-center justify-between mt-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $ {product.price}
                </span>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
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
