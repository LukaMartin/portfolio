import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

export default function Skills() {

    return (
        <div data-aos="zoom-in" className="bg-[#121212] border-[1px] border-[#252525] rounded-xl text-white p-6 md:p-8 mx-4 xl:mx-0 md:mx-[7.5rem] lg:mx-8 lg:w-[42%] lg:my-40 lg:max-h-[24rem]">
            <h2 className="text-xl md:text-2xl pb-8">Skills</h2>
            <p className="mb-2">My skills currently include <span className="font-[600]">HTML</span>, <span className="font-[600]">CSS</span>, <span className="font-[600]">JavaScript</span> and <span className="font-[600]">React</span>.</p>
            <p> I am now progressing to backend development, to further expand my skills.</p>
            <div className="hidden md:flex justify-between pt-8 lg:pt-20">
                <FaHtml5 size={50} className="text-[#F06529]" />
                <FaCss3Alt size={50} className="text-[#2965f1]" />
                <RiJavascriptFill size={50} className="text-[#f7df1e]" />
                <FaReact size={50} className="text-[#61DBFB]" />
            </div>
            <div className="md:hidden flex justify-between pt-8 lg:pt-20">
                <FaHtml5 size={42} className="text-[#F06529]" />
                <FaCss3Alt size={42} className="text-[#2965f1]" />
                <RiJavascriptFill size={42} className="text-[#f7df1e]" />
                <FaReact size={42} className="text-[#61DBFB]" />
            </div>
        </div>
    )
};