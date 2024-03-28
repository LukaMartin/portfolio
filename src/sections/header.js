import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {

    const [toggleView, setToggleView] = useState(false)

    return (
        <>
            <div className="h-[9rem] bg-[#070808] text-white border-b-[1px] border-b-slate-400">
                <nav className="hidden md:flex justify-between max-w-[75rem] lg:mx-2 xl:mx-auto h-full items-center">
                    <h1 className="md:text-2xl lg:text-3xl pl-8 xl:pl-1">Luka Martin Portfolio</h1>
                    <ul className="flex text-xl">
                        <a href="#about-me"><li className="px-2 lg:px-6 hover:underline">About Me</li></a>
                        <a href="#projects"><li className="px-2 lg:px-6 hover:underline">Projects</li></a>
                        <a href="#skills"><li className="px-2 lg:px-6 hover:underline">Skills</li></a>
                        <a href="#contact"><li className="pl-2 pr-8 lg:px-6 xl:px-0 xl:pl-6 hover:underline">Contact</li></a>
                    </ul>
                </nav>
                <div className="h-[9rem] text-white md:hidden flex justify-between items-center px-8">
                    <h1 className="max-w-[66%] xs:max-w-full text-2xl">Luka Martin Portfolio</h1>
                    {!toggleView && <FiMenu size={30} onClick={() => setToggleView(!toggleView)} />}
                </div>
                <div className={toggleView ? "fixed top-0 left-0 bg-[#020202] text-white h-full w-screen ease-in-out duration-700 md:hidden" : "fixed overflow-hidden z-10 inset-0 delay-200 duration-700 opacity-0 translate-x-full"}>
                    <div className="flex h-[9rem] justify-between px-8 items-center">
                        <h1 className="text-2xl lg:text-3xl">Luka Martin Portfolio</h1>
                        <FiX className="" size={35} onClick={() => setToggleView(!toggleView)} />
                    </div>
                    <ul className="text-lg pl-8">
                        <a onClick={() => setToggleView(false)} href="#about-me"><li className="mr-20 pb-5 hover:underline border-b-2 border-b-white">About Me</li></a>
                        <a onClick={() => setToggleView(false)} href="#projects"><li className="mr-20 py-5 hover:underline border-b-2 border-b-white">Projects</li></a>
                        <a onClick={() => setToggleView(false)} href="#skills"><li className="mr-20 py-5 hover:underline border-b-2 border-b-white">Skills</li></a>
                        <a onClick={() => setToggleView(false)} href="#contact"><li className="mr-20 pt-5 hover:underline">Contact</li></a>
                    </ul>
                    <div className="fixed bottom-0 left-0 pl-8 pb-10 flex">
                        <a href="https://www.linkedin.com/in/luka-martin-7b674a134/" target="_blank"><FaLinkedin size={35} className="mr-2" /></a>
                        <a href="https://github.com/LukaMartin" target="_blank"><FaGithub size={35} /></a>
                    </div>
                </div>
            </div>

        </>
    )
};