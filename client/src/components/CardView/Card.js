import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-34"
        src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Sunset in the mountains"
      />
      <div className="bg-[#333333] px-6 py-4">
        <div className="text-lg mb-2 text-white">The Coldest Sunset</div>
      </div>
    </div>
  );
};

export default Card;
