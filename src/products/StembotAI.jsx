import React, { useState } from "react";

export default function StembotAI() {
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
          <ul className="list-disc list-inside space-y-3">
            <li>
              Inherits almost every feature from the standard industrial model
              but uses NVIDIA’s ARM-based Single Board Computer, which includes
              a powerful embedded GPU. This setup enhances applications for AI
              models in vision-based decision-making and Large Language Models
              for interactive, automated environment exploration.
            </li>
            <li>
              Built upon the ISAAC ROS2 platform from NVIDIA, which is derived
              from the ROS2 framework but optimized by NVIDIA to run efficiently
              on their hardware.
            </li>
            <li>
              Supports both TensorFlow and PyTorch deep learning frameworks,
              allowing deployment of AI models for inferencing on the edge.
            </li>
            <li>
              Features effective ROS2 Pub/Sub transport via FastDDS (Data
              Distribution Service) for fast and coherent communication with
              servers or workstations, useful for both simulation (e.g., Digital
              Twin) and monitoring (AI, Fleet Management, etc.).
            </li>
            <li>
              Equipped with ROS2 packages to run vision-based or LLM models,
              allowing direct inference using pre-trained models (e.g., ONNX) on
              the edge for optimal results and efficient resource usage while
              running concurrent packages.
            </li>
            <li>
              Utilizes NVIDIA’s DeepStream, Triton, and TAO Toolkit to enhance
              AI and computer vision application development and deployment,
              leveraging GPU and Tensor Cores to meet industrial standards.
            </li>
            <li>
              Includes a 3D RGB Depth camera by Intel RealSense for visual
              exploration and point cloud fusion, improving navigation for
              indoor and semi-outdoor environments.
            </li>
            <li>
              Supports simulation and Digital Twin integration with NVIDIA’s
              Omniverse platform, enabling robot simulation and reinforcement
              learning (RL) tasks in a differential environment for model
              training prior to real-time deployment.
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
