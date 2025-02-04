import React from "react";
import { FaReact, FaRust } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiSolidity } from "react-icons/si";

export default function Skills() {
  return (
    <div
      data-aos="zoom-in"
      className="bg-[#121212] border-[1px] border-[#252525] rounded-xl text-white p-6 md:p-8 mx-4 xl:mx-0 md:mx-[7.5rem] lg:mx-8 lg:w-[42%] lg:my-40 lg:max-h-[23.55rem]"
    >
      <h2 className="text-xl md:text-2xl pb-8">Skills</h2>
      <p className="mb-2">
        My frontend skills currently include HTML, CSS, JavaScript, TypeScript,
        React and NextJs. I have backend experience in NodeJs, NestJs and
        PostgreSQL.
      </p>
      <p>
        I have blockchain experience writing EVM smart contracts in Solidity and
        Solana programs in Rust with Anchor.
      </p>
      <div className="hidden md:flex justify-between pt-8 lg:pt-12">
        <RiJavascriptFill size={50} className="text-[#f7df1e]" />
        <BiLogoTypescript size={50} className="text-[#3178C6]" />
        <FaReact size={50} className="text-[#61DBFB]" />
        <SiNextdotjs size={50} className="text-black" />
        <FaRust size={50} className="text-[#D34616]" />
        <SiSolidity size={50} className="text-[#6262d4]" />
      </div>
      <div className="hidden xs:flex md:hidden justify-between pt-8 lg:pt-12">
        <RiJavascriptFill size={42} className="text-[#f7df1e]" />
        <BiLogoTypescript size={42} className="text-[#3178C6]" />
        <FaReact size={42} className="text-[#61DBFB]" />
        <SiNextdotjs size={42} className="text-black" />
        <FaRust size={42} className="text-[#D34616]" />
        <SiSolidity size={42} className="text-[#6262d4]" />
      </div>

      <div className="flex xs:hidden justify-between pt-8 lg:pt-12">
        <RiJavascriptFill size={35} className="text-[#f7df1e]" />
        <BiLogoTypescript size={35} className="text-[#3178C6]" />
        <FaReact size={35} className="text-[#61DBFB]" />
        <SiNextdotjs size={35} className="text-black" />
        <FaRust size={35} className="text-[#D34616]" />
        <SiSolidity size={35} className="text-[#6262d4]" />
      </div>
    </div>
  );
}
