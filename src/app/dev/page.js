import React from "react";

const page = () => {
  return (
    <div className="min-h-screen mx-auto p-4">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center border border-black w-3/4">
          <label>Variant</label>
          <select className="select select-accent w-full md:w-auto">
            <option>5 inch - $25</option>
            <option>2</option>
          </select>
        </div>
        <div className="flex flex-col justify-center border border-black w-1/4">
          <label>Quantity</label>
          <select className="select select-accent w-full md:w-auto">
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default page;
