import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-black w-[100wh] h-[100vh] bg-slate-300 flex justify-center items-center">
      <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] sm:pb-10 bg-[#f0eff2] flex flex-col justify-center items-center h-full sm:h-fit">
        <header className="text-center w-full my-4 text-xl font-semibold">
          Jwt Authentication
        </header>
        {children}
      </div>
    </div>
  );
}

export default layout;
