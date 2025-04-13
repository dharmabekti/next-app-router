import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";

export default async function ProductDetailPage(props: any) {
  const { params } = props;
  //   const data = await getData(`https://fakestoreapi.com/products/${params.id}`);
  const product = await getData(
    `http://localhost:3000/api/product/?id=${params.id}`
  );
  const data = product.data;

  return (
    <Modal>
      <img
        src={data.image}
        alt=""
        className="w-10/12 object-cover aspect-square col-span-2"
      />
      <div className="w-10/12 bg-white p-4 px-6">
        <h3>{data.name}</h3>
        <p>Price: $ {data.price}</p>
      </div>
    </Modal>
  );
}
