import app from "@/lib/firebase/init";
import { retrieveData, retrieveDatabyId } from "@/lib/firebase/service";
import { getFirestore } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  // {
  //   id: 4,
  //   title: "Mens Casual Slim Fit",
  //   price: 15.99,
  //   image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  // },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(id);

  if (id) {
    // const detailProduct = data.find((item) => item.id == Number(id)); //
    const detailProduct = await retrieveDatabyId("products", id);
    if (!detailProduct) {
      return NextResponse.json({ status: 404, message: "Not Found", data: [] });
    }
    return NextResponse.json({
      status: 200,
      message: "success",
      data: detailProduct,
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({ status: 200, message: "success", data: products });
}
