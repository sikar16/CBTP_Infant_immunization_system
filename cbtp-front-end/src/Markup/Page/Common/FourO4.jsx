import React from "react";
import { Link } from "react-router-dom";
function FourO4() {
  return (
    <>
      <div className="bg-[#137E8F]">
        <section className="relative z-10 py-[120px]">
          <div className="container mx-auto">
            <div className="text-center">
              <h2 className="mb-2 text-5xl font-bold leading-none text-white sm:text-6xl md:text-7xl">
                404
              </h2>
              <h4 className="mb-3 text-xl font-semibold leading-tight text-white">
                Oops! That page can't be found
              </h4>
              <p className="mb-8 text-lg text-white">
                The page you are looking for may have been deleted
              </p>
              <Link
                to="/"
                className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-primary"
              >
                Go to Home
              </Link>
            </div>
          </div>

          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
            <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="flex h-full w-1/3">
              <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
              <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
            </div>
            <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FourO4;
