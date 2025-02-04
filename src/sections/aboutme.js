import React from "react";
import imageOne from "../images/about-me.jpg"

export default function AboutMe() {

    return (
        <div id="about-me" className="md:mx-auto text-white py-20 lg:py-40 border-b-[1px] border-b-[#252525]">
            <div className="flex flex-col lg:max-w-[75rem] lg:flex-row lg:justify-between mx-4 md:mx-[7.5rem] lg:mx-8 xl:mx-auto">
                <div className="md:w-[100%] lg:w-[45%] xl:w-[42%] p-6 md:p-8 bg-[#121212] rounded-xl border-[1px] border-[#252525] text-[17px]">
                    <p className="mb-3">Hi there, my name is Luka, I am a software developer located in Sydney, Australia. I made the decision to change careers and left the trades and services industry, where I had been working as an electrician for 13 years.</p>
                    <p>I'm inspired by innovative web applications and tools, that have been built with the goal of optimising the end users experience. I have a strong passion for Web 3 and blockchain development, with a focus on Solana and EVM chains.</p>
                </div>
                <img alt="" src={imageOne} className="mt-20 p-6 md:p-8 lg:my-0 md:self-center lg:self-start lg:max-w-[45%] xl:max-w-[42%] lg:h-[90%] xl:h-[69%] bg-[#121212] rounded-xl border-[1px] border-[#252525]" />
            </div>
        </div>
    )
}
