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
  const data: StaticDataProps[]  = [
    {
      id: 1,
      title: "product-1",
      price: 1000000,
      image:
        "https://www.lineashoes.com/media/catalog/product/cache/0cba5384d60be889ad311008a47fc53b/0/1/01-DR-MARTENS-FUH3YDRM0-DRM10085001-Black.jpg",
    },
    {
      id: 2,
      title: "product-7",
      price: 2000000,
      image:
        "https://www.lineashoes.com/media/catalog/product/cache/0cba5384d60be889ad311008a47fc53b/0/1/01-DR-MARTENS-FUH3YDRM0-DRM10085001-Black.jpg",
    },
    {
      id: 3,
      title: "product-2",
      price: 2100000,
      image:
        "https://www.lineashoes.com/media/catalog/product/cache/0cba5384d60be889ad311008a47fc53b/0/1/01-DR-MARTENS-FUH3YDRM0-DRM10085001-Black.jpg",
    },
    {
      id: 4,
      title: "product-3",
      price: 2100000,
      image:
        "https://www.lineashoes.com/media/catalog/product/cache/0cba5384d60be889ad311008a47fc53b/0/1/01-DR-MARTENS-FUH3YDRM0-DRM10085001-Black.jpg",
    },
    {
      id: 5,
      title: "product-5",
      price: 2100000,
      image:
        "https://www.lineashoes.com/media/catalog/product/cache/0cba5384d60be889ad311008a47fc53b/0/1/01-DR-MARTENS-FUH3YDRM0-DRM10085001-Black.jpg",
    },
  ];
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
