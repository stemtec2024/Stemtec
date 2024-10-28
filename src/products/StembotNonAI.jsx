import React, { useState } from "react";

export default function StembotNonAI() {
  const [selectImg, setSelectImg] = useState("./agv.jpg");
  return (
    <div className="flex mt-5 flex-col md:flex-row">
      <img src={selectImg} alt="" className="md:w-4/12 md:h-2/4" />{" "}
      <div className="flex ml-7 space-x-2 md:invisible">
        <img
          src="agv.jpg"
          alt="agv.jpg"
          className="w-20 border-2"
          onClick={() => {
            setSelectImg("agv.jpg");
          }}
        />
        <img
          src="agv.jpg"
          alt="agv.jpg"
          className="w-20 border-2"
          onClick={() => {
            setSelectImg("agv.jpg");
          }}
        />
      </div>
      <div className="m-10">
        <div className="font-bold text-4xl ">STEMBOT X2 (Autonomous)</div>
        <div className="text-gray-500">StemTec AI & Robotics PVT LTD</div>

        <div className="mt-5">
          <ul className="list-disc list-inside space-y-2">
            <li>
              Allows students to explore core concepts of industrial robotics
              design and approaches with reference to the STEMBOT X2’s
              architecture.
            </li>
            <li>
              Designed and operated using ROS2 (Robot Operating System)
              framework from the OSRF foundation (Original Contributors and
              Support) for compatibility with various open-source packages,
              enabling operations such as autonomy, navigation, and fleet
              control.
            </li>
            <li>
              Supports industrial-designed packages with robust performance per
              watt on a typical x86 compute platform.
            </li>
            <li>
              Equipped with on-board 2D LiDAR, allowing the base to perform SLAM
              (Simultaneous Localization and Mapping) out of the box using
              various mapping algorithms.
            </li>
            <li>
              Robust low-level control system based on Teensy 4 high-performance
              microcontroller platform with MicroROS firmware for cohesive
              control and operation with higher-level systems.
            </li>
            <li>
              Powerful motor driving unit by Cytron ensures great power
              efficiency, maneuverability, and longevity.
            </li>
            <li>
              Includes six Time-of-Flight sensors for lower-level control and
              assistance in navigation algorithms, providing localized distance
              to avoid collisions.
            </li>
            <li>
              Up to 20 hours of operation time using a 5000 mAh 3-cell LiPo
              battery with onboard protection against short circuit and
              overload.
            </li>
          </ul>
        </div>
        <br />

        <div className="flex ml-7 space-x-2 mt-14 collapse md:visible">
          <img
            src="agv.jpg"
            alt="agv.jpg"
            className="w-20 border-2"
            onClick={() => {
              setSelectImg("agv.jpg");
            }}
          />
          <img
            src="agv.jpg"
            alt=""
            className="w-20 border-2"
            onClick={() => {
              setSelectImg("agv.jpg");
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
