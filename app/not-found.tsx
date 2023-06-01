export default function Notfound() {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col gap-10 justify-center items-center">
        <div className="bg-gray-700 w-fit h-fit py-2 px-5 animate-pulse text-center">
          Error 404
        </div>
        <div className="bg-gray-700 w-[40%] h-40 animate-pulse flex justify-center items-center text-4xl">
          Page Not Found🤔
        </div>
      </div>
    </>
  );
}
