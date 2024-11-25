import imageJayaru from "@/assets/images/imageJayaru.png";
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={imageJayaru} className="size-[300px]" alt="Jayaru Perera" /> 
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Available for work</div>
          </div>
        </div>
        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">I am Jayaru Perera,</h1>
        <h1 className="font-serif text-3xl text-center ">a Full-Stack Developer</h1>
        <p className="mt-4 text-center text-white/60">
        I am a software engineering student with practical experience in full-stack development and cloud computing. Proficient in frameworks like React, Next.js, and Firebase, I enjoy building scalable, user-friendly applications. As an AI enthusiast, I am passionate about integrating innovative technologies to solve real-world challenges while continuously improving my skills. I am currently seeking an internship to gain hands-on experience, contribute fresh ideas, and collaborate with dynamic teams on impactful projects.
        </p>
        <div className="flex flex-col items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4"/>
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>📄</span>
            <span className="font-semibold ">Download CV</span>
          </button> 
        </div>
      </div>;
  </div>
  );
};
