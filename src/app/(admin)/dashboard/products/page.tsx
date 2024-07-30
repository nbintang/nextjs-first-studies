"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminProduct() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [isStatus, setStatus] = useState<string>("");

  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=12345",
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setTimeout(() => {
        setStatus("Revalidate failed");
      }, 1000);
    } else {
      const statusRes = await res.json();
      if (statusRes.revalidate) {
        setTimeout(() => {
          setStatus("Revalidate Success");
        }, 1000);
      }
    }
  };

  return (
    <div className="grid grid-rows-2 place-items-center gap-2">
      <span className="">{isStatus}</span>

      <button
        onClick={() => revalidate()}
        className="border p-3 bg-white rounded hover:opacity-90 text-black m-4"
      >
        Refresh Products
      </button>
    </div>
  );
}
