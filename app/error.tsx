"use client";

export default function Error() {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col gap-10 justify-center items-center">
        <div className="bg-gray-700 w-[10%] h-6 ">error 404</div>
        <div className="bg-gray-700 w-[40%] h-40 animate-pulse">error</div>
      </div>
    </>
  );
}
