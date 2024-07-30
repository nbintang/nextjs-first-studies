import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex gap-2 text-3xl font-bold justify-center items-center h-screen">
      <span>404</span>
      <h1>Not Found</h1>
      {" | "}
      <button className="border-b text-2xl hover:opacity-90">
        <Link href={"/"}>Back to Pages</Link>
      </button>
    </div>
  );
}
