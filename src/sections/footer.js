import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {

    return (
        <div className="py-20 text-white bg-[#121212]">
            <div className=" max-w-[75rem] lg:mx-8 xl:mx-auto">
                <div className="flex justify-between pl-8 lg:pl-0">
                    <h3 className="text-xl lg:text-2xl pb-12">Luka Martin Portfolio</h3>
                    <ul className="hidden md:flex text-lg">
                        <a href="#about-me"><li className="px-2 lg:px-6 hover:underline">About Me</li></a>
                        <a href="#projects"><li className="px-2 lg:px-6 hover:underline">Projects</li></a>
                        <a href="#contact"><li className="pl-2 pr-8 lg:px-6 xl:px-0 xl:pl-6 hover:underline">Contact</li></a>
                    </ul>
                </div>
                <h4 id="contact" className="text-lg pb-2 pl-8 lg:pl-0">Contact</h4>
                <p className="pl-8 lg:pl-0">If you would like to get in contact, please</p>
                <p className="pl-8 pr-2 md:max-w-[48%] lg:pl-0">feel free to reach out via email, LinkedIn or GitHub.</p>
                <div className="hidden md:flex pt-12 pl-8 lg:pl-0">
                    <a href="https://www.linkedin.com/in/luka-martin-7b674a134/" target="_blank"><FaLinkedin size={40} className="mr-4" /></a>
                    <a href="mailto:ldm3334@gmail.com"><MdOutlineEmail size={40} className="mr-4" /></a>
                    <a href="https://github.com/LukaMartin" target="_blank"><FaGithub size={40} /></a>
                </div>
                <div className="flex pt-12 pl-8 lg:pl-0 md:hidden">
                    <a href="https://www.linkedin.com/in/luka-martin-7b674a134/" target="_blank"><FaLinkedin size={35} className="mr-4" /></a>
                    <a href="malito: ldm3334@gmail.com"><MdOutlineEmail size={35} className="mr-4" /></a>
                    <a href="https://github.com/LukaMartin" target="_blank"><FaGithub size={35} /></a>
                </div>
            </div>
        </div>
    )
}