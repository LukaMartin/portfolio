import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import gastrackerOne from "../images/gastracker-one.png"
import gastrackerTwo from "../images/gastracker-two.png"
import gymGenOne from "../images/gymgen-one.PNG"
import gymGenTwo from "../images/gymgen-two.PNG"

import hibernationOne from "../images/hibernation-one.PNG"
import hibernationTwo from "../images/hibernation-two.PNG"


export default function Gallery() {

    const images = [
        {
            original: gastrackerOne,
            originalAlt: "gastracker-image-one",
            originalClass: "rounded-xl overflow-hidden"
        },
        {
            original: gastrackerTwo,
            originalAlt: "gastracker-image-one",
            originalClass: "rounded-xl overflow-hidden"
        },
        {
            original: gymGenOne,
            originalAlt: "spotify-app-image-one",
            originalClass: "rounded-xl overflow-hidden"
        },
        {
            original: gymGenTwo,
            originalAlt: "spotify-app-image-two",
            originalClass: "rounded-xl overflow-hidden"
        },
        {
            original: hibernationOne,
            originalAlt: "hibernation-project-image-one",
            originalClass: "rounded-xl overflow-hidden"
        },
        {
            original: hibernationTwo,
            originalAlt: "hibernation-project-image-two",
            originalClass: "rounded-xl overflow-hidden"
        }
    ]

    return (
        <div data-aos="fade-up" className="hidden md:block max-w-[75rem] mx-8 xl:mx-auto p-8 bg-[#121212] border-[1px] border-[#252525] rounded-xl my-20 lg:my-40">
            <h2 className="text-2xl text-white pb-8">Project Gallery</h2>
            <ImageGallery 
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
                showBullets={true}
            />
        </div>
    )

};