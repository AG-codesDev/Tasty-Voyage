import React from "react";

const Footer = () => {
  return (
    <div className="footer mt-10 bg-gray-200 ">
      <div className="flex items-center gap-10 py-5 justify-center">
        <h1 className="text-xl font-bold font-Poppins text-gray-900">
          For better experience,download the app now
        </h1>
        <div className="imgBox flex">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            alt=""
            className="h-14 w-44"
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            alt=""
            className="h-14 w-44"
          />
        </div>
      </div>
      <div className="myName bg-black text-white text-center py-4 font-serif">
        Made with 😋 by Apurva Gaurav
      </div>
    </div>
  );
};

export default Footer;
