import { retriveData, retriveDataById } from "@/lib/firebase/services";
import { NextResponse, NextRequest } from "next/server";

type StaticDataProps = {
  id?: number;
  title: string;
  price: number;
  image?: string;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = await retriveDataById("products", id)
    if (!detailProduct) {
      return NextResponse.json({
        status: 404,
        message: "data not Found",
        data: {},
      });
    }
    return NextResponse.json({
      status: 200,
      message: "success",
      data: detailProduct,
    });
  }

  const products = await retriveData("products")
  return NextResponse.json({
    status: 200,
    message: "success",
    data:products,
  });
}
