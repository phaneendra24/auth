export default function Loading() {
  return (
    <div className="w-full h-[100vh] flex flex-col gap-10 justify-center items-center">
      <div className="bg-gray-700 w-[10%] h-6 animate-pulse"></div>
      <div className="bg-gray-700 w-[40%] h-40 animate-pulse"></div>
    </div>
  );
}
