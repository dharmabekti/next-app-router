import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Product 1",
    price: 100000,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200000,
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(id);

  if (id) {
    const detailProduct = data.find((item) => item.id == Number(id));
    if (!detailProduct) {
      return NextResponse.json({ status: 404, message: "Not Found", data: [] });
    }
    return NextResponse.json({
      status: 200,
      message: "success",
      data: detailProduct,
    });
  }

  return NextResponse.json({ status: 200, message: "success", data });
}
