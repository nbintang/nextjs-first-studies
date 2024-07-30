"use client";

import { useEffect } from "react";

export default function ErrorFetch({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
    
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Something Went Wrong!</h1>
      <button
        onClick={() => reset()}
        className="border bg-white rounded p-2 hover:opacity-90 text-black"
      >
        Try Again!
      </button>
    </div>
  );
}
