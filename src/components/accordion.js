import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Accordion() {

    const [toggleViewOne, setToggleViewOne] = useState(false)

    const [toggleViewTwo, setToggleViewTwo] = useState(false)

    const [toggleViewThree, setToggleViewThree] = useState(false)

    const menuItemsOne = () => {
        setToggleViewOne(true)
        setToggleViewTwo(false)
        setToggleViewThree(false)
    }

    const menuItemsTwo = () => {
        setToggleViewOne(false)
        setToggleViewTwo(true)
        setToggleViewThree(false)
    }

    const menuItemsThree = () => {
        setToggleViewOne(false)
        setToggleViewTwo(false)
        setToggleViewThree(true)
    }

    return (
        <div data-aos="zoom-in" className="bg-[#121212] rounded-xl text-white mx-4 xl:mx-0 my-20 lg:my-40 md:mx-[7.5rem] lg:mx-8 lg:w-[42%]">
            <div className=" flex flex-col p-6 md:p-8">
                <h2 className="text-xl md:text-2xl">Projects</h2>
                <li className="flex justify-between py-8 text-lg border-b-[1px] border-b-slate-400">Ethereum Gas Tracker
                    {!toggleViewOne ? <IoIosArrowDown className="hover:opacity-25" onClick={menuItemsOne} size={25} /> : <IoIosArrowUp className="hover:opacity-25" onClick={() => setToggleViewOne(false)} size={25} />}
                </li>
                {toggleViewOne && <p className="pt-8">I created an application that gives up to date Ethereum gas price estimates, referencing BlockNative and GasNow thorugh their API's.</p>}
                {toggleViewOne && <a className="pt-4 underline lg:hover:underline hover:opacity-20" href="https://eth-gas-tracker-ten.vercel.app/" target="_blank">Website Link</a>}
                <li className="flex justify-between py-8 text-lg border-b-[1px] border-b-slate-400">Spotify Interface
                    {!toggleViewTwo ? <IoIosArrowDown className="hover:opacity-25" onClick={menuItemsTwo} size={25} /> : <IoIosArrowUp className="hover:opacity-25" onClick={() => setToggleViewTwo(false)} size={25} />}
                </li>
                {toggleViewTwo && <p className="pt-8">I built a Spotify interface that enables users to search for tracks, and create and edit their playlists.</p>}
                {toggleViewTwo && <a className="pt-4 underline lg:hover:underline hover:opacity-20" href="https://jamming-sand.vercel.app/" target="_blank">Website Link</a>}
                <li className="flex justify-between py-8 text-lg border-b-[1px] border-b-slate-400">Froggy Friends Website
                    {!toggleViewThree ? <IoIosArrowDown className="hover:opacity-25" onClick={menuItemsThree} size={25} /> : <IoIosArrowUp className="hover:opacity-25" onClick={() => setToggleViewThree(false)} size={25} />}
                </li>
                {toggleViewThree && <p className="pt-8">I assisted the Froggy Friends development team in building the new website for their Hibernation NFT staking.</p>}
                {toggleViewThree && <a className="pt-4 underline lg:hover:underline hover:opacity-20" href="https://hibernation.froggyfriends.io/" target="_blank">Website Link</a>}
            </div>
        </div>
    )
};

