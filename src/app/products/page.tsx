"use client";
import { generateCurrency } from "@/utils/generateCurrency";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

type DetailProductPagesProps = { params: { slug: string[] } };
const fetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  } catch (error) {
    console.error("Fetching error:", error);
    throw error;
  }
};

export default function Product(props: DetailProductPagesProps) {
  const { params } = props;
  const apiUrl = `${process.env.NEXTAUTH_API_URL}/api/products`;
  console.log("API URL:", apiUrl);

  const { data, error, isLoading } = useSWR(apiUrl, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const products = data?.data || [];
  console.log("Products data:", products);

  return (
    <div className="">
      <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1>
      <div className="grid grid-cols-4 place-items-center">
        {products.length > 0 &&
          products.map((item: any) => {
            return (
              <div
                key={item.id}
                className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
              >
                <Link
                  className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href={`/products/detail/${item.id}`}
                >
                  <Image
                    className="peer absolute bottom-0 right-0 object-bottom w-full object-cover"
                    src={item.image}
                    alt="product image"
                    width={200}
                    height={200}
                    priority
                  />
                </Link>
                <div className="mt-4 px-5 pb-5">
                  <h5 className="text-xl tracking-tight text-slate-900 truncate">
                    {item.name}
                  </h5>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">
                        {`$${generateCurrency(item.price)}`}
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      {params.slug && (
        <>
          <p>{params.slug}</p>
          <p>{[...params.slug]}</p>
          <p>{params.slug[0]}</p>
          <p>{params.slug[1]}</p>
          <p>{params.slug[2]}</p>
        </>
      )}
    </div>
  );
}
