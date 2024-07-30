export default function Loading() {
  return (
    <div>
      <div className="grid place-items-center h-screen">
      <div className="flex text-2xl gap-2 items-center">
              {" "}
                <div className="w-10 h-10 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
              {" "}
              <span> Loading...</span>
            </div>
      </div>
    </div>
  );
}
