import React from "react";
import people from "./People";

const Hiring = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center bg-lightGreen gap-20">
      <div className="flex flex-col items-center gap-10 max-w-[800px] px-8">
        <h1 className="bg-whiteGreen p-2 rounded-sm font-light  text-green  text-center">
          Available for {new Date().getMonth() == 11 ? "December" : "January"}{" "}
          {new Date().getFullYear()}
        </h1>
        <h1 className="text-4xl font-dm text-center ">
          Meet the Best Freelancers
        </h1>
        <p className="font-light text-center text-sm">
          Discover and enlist the services of freelancers and editors prepared
          to create ui/ux designs, frontend development, backend development,
          web designs, and various other content types.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 gap-10 lg:w-9/12 w-full px-8">
        {people.map(({ img, id, name, field }) => {
          return (
            <div
              key={id}
              className="flex flex-col items-center gap-5 pp cursor-pointer"
            >
              <img
                src={img}
                className="w-[150px] h-[150px] object-cover border-4 border-green rounded-full"
              />
              <div className="flex flex-col items-center gap-1">
                <h1 className="text-[15px] font-bold">{name}</h1>
                <p className="text-md text-green font-bold font-indie">
                  {field}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hiring;
