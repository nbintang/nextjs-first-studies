import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Image
        className="rounded-md"
        src="https://www.lineashoes.com/media/catalog/product/cache/0cba5384d60be889ad311008a47fc53b/0/1/01-DR-MARTENS-FUH3YDRM0-DRM10085001-Black.jpg"
        alt="alt"
        width={300}
        height={300}
      />
      <div className="w-96">
        <h1 className="text-5xl font-semibold">CUMAN BUAT LATIHAN</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          iste quaerat consectetur dignissimos hic cum at eius, itaque nemo
          temporibus accusamus ad aut? Accusantium dolore corrupti at veniam.
          Debitis, pariatur?
        </p>
        <div className="w-full flex justify-center">
            
        <button className="bg-white text-black  rounded-md px-4 py-1 hover:opacity-90">
            See Detail
        </button>
        </div>
      </div>
    </>
  );
}
