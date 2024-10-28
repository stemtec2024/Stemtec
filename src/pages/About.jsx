import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 500, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

export default function About() {
  return (
    <div data-aos="fade-left">
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-indigo-600">STEMTEC</span>
            </h2>
            <p className="text-gray-700">
              <div>
                Welcome to STEMTEC AI and Robotics, India's premier AI coding
                and robotics lab setup company. We deliver comprehensive,
                end-to-end solutions for K-12 schools, fully aligned with the
                National Education Policy (NEP) 2020. Our mission is to empower
                students and educators with the 21st-century skills they need to
                excel in a fast-changing technological world.
              </div>
              <br />
              <div>
                Through our K-12 solutions, we provide schools with essential
                tools and resources to inspire young minds, fostering curiosity
                and a spirit of exploration. Our holistic approach supports both
                students and teachers, equipping them with the expertise needed
                to thrive in the 21st century. Join STEMTEC AI and Robotics on
                our mission to transform STEM education. As a leader in AI and
                robotics, we are committed to preparing students for a
                technology-driven future. Together, let’s unlock each student’s
                potential, ignite a lifelong passion for learning, and create a
                brighter tomorrow.
              </div>
              <br />
              <div>
                <div>Mission</div>{" "}
                <div>
                  To empower the next generation with essential 21st-century
                  skills through innovative STEM education, fostering
                  creativity, problem-solving, and technological proficiency in
                  K-12 students. We are dedicated to equipping educators and
                  students with the resources and knowledge to thrive in a
                  rapidly advancing world, building a foundation for lifelong
                  learning and success.
                </div>
                <div>Vision</div>{" "}
                <div>
                  To become the foremost leader in AI and robotics education for
                  K-12, creating a future where every student has access to
                  transformative, hands-on STEM learning experiences. Our vision
                  is to cultivate curious, capable, and resilient young
                  innovators who are prepared to shape and lead a
                  technology-driven world.
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
