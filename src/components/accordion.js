import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Accordion() {
  const [toggleViewOne, setToggleViewOne] = useState(false);
  const [toggleViewTwo, setToggleViewTwo] = useState(false);
  const [toggleViewThree, setToggleViewThree] = useState(false);

  const menuItemsOne = () => {
    setToggleViewOne(true);
    setToggleViewTwo(false);
    setToggleViewThree(false);
  };

  const menuItemsTwo = () => {
    setToggleViewOne(false);
    setToggleViewTwo(true);
    setToggleViewThree(false);
  };

  const menuItemsThree = () => {
    setToggleViewOne(false);
    setToggleViewTwo(false);
    setToggleViewThree(true);
  };

  return (
    <div
      data-aos="zoom-in"
      className="bg-[#121212] rounded-xl text-white mx-4 xl:mx-0 my-20 lg:my-40 md:mx-[7.5rem] lg:mx-8 lg:w-[42%] border-[1px] border-[#252525]"
    >
      <div className=" flex flex-col p-6 md:p-8">
        <h2 className="text-xl md:text-2xl">Projects</h2>
        <li className="flex justify-between py-8 text-lg border-b-[1px] border-b-slate-400">
          Web 3 Sonar
          {!toggleViewOne ? (
            <IoIosArrowDown
              className="hover:opacity-25 hover:cursor-pointer transition-all duration-300"
              onClick={menuItemsOne}
              size={25}
            />
          ) : (
            <IoIosArrowUp
              className="hover:opacity-25 hover:cursor-pointer transition-all duration-300"
              onClick={() => setToggleViewOne(false)}
              size={25}
            />
          )}
        </li>
        {toggleViewOne && (
          <p className="pt-8">
            Web3 Sonar is an application that aims to provide users with a wide
            variety of tools to navigate web3. I built the application using
            NextJs, TypeScript, TailwindCSS, Zustand, Wagmi, EthersJs and Shadcn
            UI.
          </p>
        )}
        {toggleViewOne && (
          <a
            className="pt-4 text-white/70 hover:text-white transition-all duration-300 w-28"
            href="https://web3sonar.xyz/"
            target="_blank"
            rel="noreferrer"
          >
            Website Link
          </a>
        )}
        <li className="flex justify-between py-8 text-lg border-b-[1px] border-b-slate-400">
          Meme Pools Launchpad
          {!toggleViewTwo ? (
            <IoIosArrowDown
              className="hover:opacity-25 hover:cursor-pointer transition-all duration-300"
              onClick={menuItemsTwo}
              size={25}
            />
          ) : (
            <IoIosArrowUp
              className="hover:opacity-25 hover:cursor-pointer transition-all duration-300"
              onClick={() => setToggleViewTwo(false)}
              size={25}
            />
          )}
        </li>
        {toggleViewTwo && (
          <p className="pt-8">
            I worked on the Froggy Friends team to build a meme coin launchpad
            that currently support the Ethereum and Base networks. I worked on
            all aspects of the application including the smart contracts,
            building API endpoints and the frontend application.
          </p>
        )}
        {toggleViewTwo && (
          <a
            className="pt-4 text-white/70 hover:text-white transition-all duration-300 w-28"
            href="https://www.memepools.com/base"
            target="_blank"
            rel="noreferrer"
          >
            Website Link
          </a>
        )}
        <li className="flex justify-between py-8 text-lg border-b-[1px] border-b-slate-400">
          Froggy Friends Portals
          {!toggleViewThree ? (
            <IoIosArrowDown
              className="hover:opacity-25 hover:cursor-pointer transition-all duration-300"
              onClick={menuItemsThree}
              size={25}
            />
          ) : (
            <IoIosArrowUp
              className="hover:opacity-25 hover:cursor-pointer transition-all duration-300"
              onClick={() => setToggleViewThree(false)}
              size={25}
            />
          )}
        </li>
        {toggleViewThree && (
          <p className="pt-8">
            As part of the Froggy Friends developement team, I worked on their
            portals application. Portals allows Froggy Friends NFT holders to
            bridge their NFTs across blockchains including Ethereum and Base
            utilising Layer Zero.
          </p>
        )}
        {toggleViewThree && (
          <a
            className="pt-4 text-white/70 hover:text-white transition-all duration-300 w-28"
            href="https://portals.froggyfriends.io/"
            target="_blank"
            rel="noreferrer"
          >
            Website Link
          </a>
        )}
      </div>
    </div>
  );
}
