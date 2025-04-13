import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";

export default async function ProductDetailPage(props: any) {
  const { params } = props;
  const data = await getData(`https://fakestoreapi.com/products/${params.id}`);
  return (
    <Modal>
      <img
        src={data.image}
        alt=""
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h3>{data.title}</h3>
        <p>Price: $ {data.price}</p>
      </div>
    </Modal>
  );
}
