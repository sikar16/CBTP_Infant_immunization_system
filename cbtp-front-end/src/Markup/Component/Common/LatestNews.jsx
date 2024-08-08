import React from "react";

function LatestNews(props) {
  return (
    <>
        <div className="w-full ">
          <div className="mb-10 w-full">
            <div className="mb-2 overflow-hidden rounded" width={"300px"} height={"300px"} >
              <img src={props.image} alt="image" className="w-full" />
            </div>
            <div>
              <span className=" inline-block text-xs font-semibold text-gray-500 leading-loose ">
                {props.date}
              </span>
              <h3>
                <p
                  href=" "
                  className="mb-3 inline-block text-lg font-semibold  hover:text-primary xl:text-xl leading-4"
                >
                  {props.title}
                </p>
              </h3>
              <p className="text-base text-body-color">{props.detaile}</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default LatestNews;
