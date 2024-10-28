import React, { useState } from "react";

export default function IotDevelopmentBoard() {
  const [selectImg, setSelectImg] = useState("./iot.jpg");
  return (
    <div className="flex mt-5 flex-col md:flex-row">
      <img src={selectImg} alt="" className="md:w-6/12" />{" "}
      <div className="flex ml-7 space-x-2 md:invisible">
        <img
          src="iot.jpg"
          alt="iot.jpg"
          className="w-20 border-2"
          onClick={() => {
            setSelectImg("iot.jpg");
          }}
        />
        <img
          src="iot2.jpg"
          alt=""
          className="w-20 border-2"
          onClick={() => {
            setSelectImg("iot2.jpg");
          }}
        />
      </div>
      <div className="m-10">
        <div className="font-bold text-4xl ">
          SmartSense IoT Development Board
        </div>
        <div className="text-gray-500">StemTec AI & Robotics PVT LTD</div>
        <div className="mt-5">
          The SmartSense IoT Development Board is an advanced platform designed
          for innovators, developers, and engineers looking to build and
          prototype Internet of Things (IoT) applications. This versatile
          development board integrates a wide array of sensors, communication
          modules, and processing capabilities, making it ideal for creating
          smart, connected devices.
        </div>
        <br />
        <div>
          With its comprehensive feature set and flexible design, the SmartSense
          IoT Development Board is an essential tool for anyone looking to
          explore the possibilities of the Internet of Things. Whether you're a
          hobbyist, student, or professional engineer, SmartSense provides the
          foundation needed to turn innovative ideas into reality.
        </div>

        <div className="flex ml-7 space-x-2 mt-14 collapse md:visible">
          <img
            src="iot.jpg"
            alt="iot.jpg"
            className="w-20 border-2"
            onClick={() => {
              setSelectImg("iot.jpg");
            }}
          />
          <img
            src="iot2.jpg"
            alt=""
            className="w-20 border-2"
            onClick={() => {
              setSelectImg("iot2.jpg");
            }}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:mt-8"
          onClick={() => (window.location.href = "mailto:admin@stemtec.in")}
        >
          Contact us ➡️
        </button>

        <button
          className="bg-green-500 hover:bg-green-700 text-white ml-2 font-bold py-2 px-4 rounded md:mt-8"
          onClick={() => {
            window.open(
              "https://wa.me/6380546966?text=Hi%20StemTec%20Team,%20I%20want%20to%20enquire%20about%20your%20product.",
              "_blank"
            );
          }}
        >
          WhatsApp Us
        </button>
      </div>
    </div>
  );
}
