import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { dataRotes } from "/public/data.js";

export default function Count() {
    const path = window.location.pathname;
    const [ defaultPath, setDefaultPath ] = useState(dataRotes[0].path);

    if (path !== defaultPath) {
        console.log('not found routes');
        
    }
    

    return(
        <>
            <div className="w-full h-screen flex">
                <aside 
                    className="w-[400px] translate-x-0 shadow-md border transition-transform duration-300 ease-out lg:w-[20%]"
                >
                    <div className={`w-full flex items-center justify-between px-10 flex-wrap gap-4 my-4`}>
                            <h3 className="text-2xl font-mainBold text-primary leading-relaxed">BG.</h3>
                            <FontAwesomeIcon icon={faUser} className="w-5 h-5"/>
                            <hr className="w-full border border-secondary/30"/>
                    </div>
                    <div className="w-full py-2 flex flex-col items-center">
                        <div className="w-full px-10 flex flex-col gap-6">
                            <h2 className="text-xl font-mainBold text-primary leading-relaxed capitalize">kategori perhitungan</h2>
                            <div className="w-full">
                                <ul className="flex flex-col gap-3 border-l border-l-secondary/30 pl-5">
                                    <li className="text-lg font-main leading-relaxed hover-list cursor-pointer">
                                        <b>bunga sederhana</b> (simple interest).
                                    </li>
                                    <li className="text-lg font-main leading-relaxed hover-list cursor-pointer">
                                        <b>bunga majemuk</b> (compound interest).
                                    </li>
                                    <li className="text-lg font-main leading-relaxed hover-list cursor-pointer">
                                        <b>bunga anuitas</b>
                                    </li>
                                    <li className="text-lg font-main leading-relaxed hover-list cursor-pointer">
                                        <b>bunga discount</b> (discount interest).
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="w-full p-5 flex-1">
                    <h2 className="text-2xl font-mainBold capitalize leading-relaxed text-primary mb-3">
                        bunga sederhana
                        <span className="text-black text-lg ml-2">(simple interest.)</span>
                    </h2>
                    <p className="text-base font-main text-black max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, temporibus delectus! Velit ducimus magni eum doloremque qui, officiis accusamus consectetur.</p>
                </div>
            </div>
        </>
    );
}
