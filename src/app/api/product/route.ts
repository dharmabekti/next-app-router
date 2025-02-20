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
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    console.log("ID:", id);

    let response;

    if (id) {
      const detailProduct = data.find((item) => item.id == Number(id));
      if (!detailProduct) {
        return NextResponse.json(
          { status: 404, message: "Not Found", data: [] },
          { status: 404 }
        );
      }
      response = NextResponse.json(
        { status: 200, message: "success", data: detailProduct },
        { status: 200 }
      );
    } else {
      response = NextResponse.json(
        { status: 200, message: "success", data },
        { status: 200 }
      );
    }

    // Tambahkan header CORS
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    return response;
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { status: 500, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Tangani preflight request (OPTIONS method)
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
