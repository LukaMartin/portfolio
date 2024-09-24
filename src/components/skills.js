import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

export default function Skills() {

    return (
        <div data-aos="zoom-in" className="bg-[#121212] border-[1px] border-[#252525] rounded-xl text-white p-6 md:p-8 mx-4 xl:mx-0 md:mx-[7.5rem] lg:mx-8 lg:w-[42%] lg:my-40 lg:max-h-[23.55rem]">
            <h2 className="text-xl md:text-2xl pb-8">Skills</h2>
            <p className="mb-2">My skills currently include HTML, CSS, JavaScript, TypeScript, React and NextJs.</p>
            <p> I also have backend exp in NodeJs, NestJs and PostgreSQL.</p>
            <div className="hidden md:flex justify-between pt-8 lg:pt-20">
                <FaHtml5 size={50} className="text-[#F06529]" />
                <FaCss3Alt size={50} className="text-[#2965f1]" />
                <RiJavascriptFill size={50} className="text-[#f7df1e]" />
                <BiLogoTypescript size={50} className="text-[#3178C6]" />
                <FaReact size={50} className="text-[#61DBFB]" />
                <SiNextdotjs size={50} className="text-black" />
            </div>
            <div className="hidden xs:flex md:hidden justify-between pt-8 lg:pt-20">
                <FaHtml5 size={42} className="text-[#F06529]" />
                <FaCss3Alt size={42} className="text-[#2965f1]" />
                <RiJavascriptFill size={42} className="text-[#f7df1e]" />
                <BiLogoTypescript size={42} className="text-[#3178C6]" />
                <FaReact size={42} className="text-[#61DBFB]" />
                <SiNextdotjs size={42} className="text-black" />
            </div>
            <div className="flex xs:hidden justify-between pt-8 lg:pt-20">
                <FaHtml5 size={35} className="text-[#F06529]" />
                <FaCss3Alt size={35} className="text-[#2965f1]" />
                <RiJavascriptFill size={35} className="text-[#f7df1e]" />
                <BiLogoTypescript size={35} className="text-[#3178C6]" />
                <FaReact size={35} className="text-[#61DBFB]" />
                <SiNextdotjs size={35} className="text-black" />
            </div>
        </div>
    )
};