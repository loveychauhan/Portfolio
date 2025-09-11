import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import EmailButton from "../components/EmailButton";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About me</h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          {" "}
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Lovey Singh Chauhan</p>
            <p className="subtext">I am a Mern Stack Developer</p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        <div className="flex items-end grid-default-color grid-2">
          {" "}
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Frontend"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Backend"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Web Design"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Mern"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>{" "}
        <div className="flex  grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in India,and available to work remote wordwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            {/* <Globe /> */}
          </figure>
        </div>
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center size-full">
            <p className="headtext text-center">Let's work together</p>
            <EmailButton />
          </div>
        </div>
        <div className="flex items-end grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;
