import React from "react";
export const Address = () => {
  return (
    <div className="px-[20px] py-[10px] flex flex-col justify-start items-start md:flex-row md:items-center md:justify-center">
      <div className="flex justify-center items-start gap-2 px-[10px] py-[20px]">
        <img
          className="w-[20px] h-[20px] p-[3px] rounded-[10px] bg-cover bg-brown"
          src="../src/assets/phone.svg"
          alt=""
        />
        <div className=" w-custom">
          <p className="text-[17px] font-[600]">+91 9384641042</p>
          <p className=" text-gray text-justify">
            A small river named Duden flows by their place and supplies
          </p>
        </div>
      </div>
      <div className="flex justify-center items-start gap-2 px-[10px] py-[20px]">
        <img
          className="w-[20px] h-[20px] p-[3px] rounded-[10px] bg-cover bg-brown"
          src="../src/assets/location.svg"
          alt=""
        />
        <div>
          <p className="text-[17px] font-[600]">Take Away</p>
          <p className=" text-gray text-justify">
            Cloud Kitchen Opp to koyambedu bus stand, jai nagar, 2nd main road,
            arumbakkam
          </p>
        </div>
      </div>
      <div className="flex justify-center items-start gap-2 px-[10px] py-[20px]">
        <img
          className="w-[20px] h-[20px] p-[3px] rounded-[10px] bg-cover bg-brown"
          src="../src/assets/timer.svg"
          alt=""
        />
        <div>
          <p className="text-[17px] font-[600]">Open monday - friday</p>
          <p className=" text-gray text-justify">9-am - 8pm</p>
        </div>
      </div>
    </div>
  );
};
