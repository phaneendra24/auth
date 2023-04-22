import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-black w-[100wh] h-[100vh] bg-white flex justify-center items-center">
      <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] h-full sm:h-[75%] bg-[#f0eff2] flex flex-col justify-start items-center">
        <header className="text-center w-full my-4 text-xl font-semibold">
          Next auth
        </header>
        {children}
      </div>
    </div>
  );
}

export default layout;
