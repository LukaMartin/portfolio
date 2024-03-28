import React from "react";
import Accordion from "../components/accordion";
import Skills from "../components/skills";



export default function ProjectsAndSKills() {

    return (
        <div className="border-b-[1px] border-b-slate-400">
            <div id="projects" className="flex flex-col max-w-[75rem] mx-auto pb-20 lg:pb-0 lg:flex-row lg:justify-between">      
                <Accordion/>
                <Skills/>   
            </div>
        </div>
    )
};