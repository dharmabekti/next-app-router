import { getData } from "@/services/products";

export default async function ProductDetailPage(props: any) {
  const { params } = props;
  //   const data = await getData(`https://fakestoreapi.com/products/${params.id}`);
  const data = await getData(
    `http://localhost:3000/api/product/?id=${params.id}`
  );
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-grey-700">
        <img
          src={data.image}
          alt=""
          className="w-10/12 object-cover aspect-square col-span-2"
        />
        <div className="bg-white p-4 px-6">
          <h3>{data.title}</h3>
          <p>Price: $ {data.price}</p>
        </div>
      </div>
    </div>
  );
}
