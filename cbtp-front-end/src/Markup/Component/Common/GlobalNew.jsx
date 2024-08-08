import React from "react";

function GlobalNew(props) {
  return (
    <>
      <div className="w-full p-3">
        <div className="mb-1 w-full">
          <div>
            <p className="leading-4 text-sm">
              {props.header}
            </p>
            <a href="" className="text-blue-300 text-xs line-clamp-2 mt-3">
                {props.link}
            </a>
            <div className="flex justify-between mt-8 text-xs text-gray-600">
              <p>{props.process}</p>
              <p>{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobalNew;
