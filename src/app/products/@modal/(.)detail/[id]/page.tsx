
import { getProduct } from "@/services/products";
import { generateCurrency } from "@/utils/generateCurrency";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("@/components/core/Modal"),{loading: () => <p className="">Loading....</p>})
export default async function detailProductsPage({ params }: any) {
  const apiData = await getProduct(
    `http://localhost:3000/api/products/?id=${params.id}`
  );
  const product = apiData.data;
  return (
    <Modal>
        <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
      <div className="relative">
        <img className="w-full" src={product.image} alt="Product Image" />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          SALE
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
          ante vel eros fermentum faucibus sit amet euismod lorem.
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">
          {`$${generateCurrency(product.price)}`}
          </span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
    </Modal>
  );
}