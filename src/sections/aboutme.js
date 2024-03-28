import React from "react";
import imageOne from "../images/about-me.jpg"

export default function AboutMe() {

    return (
        <div id="about-me" className="md:mx-auto text-white py-20 lg:py-40 border-b-[1px] border-b-slate-400">
            <div className="flex flex-col lg:max-w-[75rem] lg:flex-row lg:justify-between mx-4 md:mx-[7.5rem] lg:mx-8 xl:mx-auto">
                <div className="md:w-[100%] lg:w-[45%] xl:w-[42%] p-6 md:p-8 bg-[#070808] rounded-xl">
                    <h2 className="text-xl md:text-2xl pb-4">About Me</h2>
                    <p className="mb-2">Hi there, my name is Luka, I am an aspiring software developer located in Sydney, Australia. I recently made the decision to change careers and left the trades and services industry, where I had been working as an electrician for the past 13 years.</p>
                    <p className="mb-2">I felt like I needed a change and am now pursuing a career as a software developer studying full time. My current goal is complete my full stack developing course and then look for my first job as a junior developer.</p>
                    <p>Long term I would love to pursue my passion with web3 and complete further studies in solidity and or rust, to eventually get a job as a web3 developer.</p>
                </div>
                <img src={imageOne} className="mt-20 p-6 md:p-8 lg:my-0 md:self-center lg:self-start lg:max-w-[45%] xl:max-w-[42%] lg:h-[90%] xl:h-[69%] bg-[#070808] rounded-xl" />
            </div>
        </div>
    )
}
