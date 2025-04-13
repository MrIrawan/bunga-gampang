import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { dataRotes } from "/public/data.js";
import { useParams, useNavigate } from "react-router-dom";

export default function Count() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Cari data berdasarkan path
    const currentData = dataRotes.find(route => route.path === id);

    // Handle jika path tidak ditemukan
    useEffect(() => {
        if (!currentData) {
            // Redirect ke default jika tidak cocok
            navigate(`/count/${dataRotes[0].path}`);
        }
    }, [id]);

    const handleClick = (title) => {
        const selected = dataRotes.find(route => {
            if (Array.isArray(route.title)) {
                return route.title.includes(title.toLowerCase());
            } else {
                return route.title.toLowerCase() === title.toLowerCase();
            }
        });

        if (selected) {
            navigate(`/count/${selected.path}`);
        }
    };

    return(
        <div className="w-full h-screen flex">
            <aside className="w-[400px] shadow-md border lg:w-[20%]">
                <div className="w-full flex items-center justify-between px-10 flex-wrap gap-4 my-4">
                    <h3 className="text-2xl font-mainBold text-primary leading-relaxed">BG.</h3>
                    <FontAwesomeIcon icon={faUser} className="w-5 h-5"/>
                    <hr className="w-full border border-secondary/30"/>
                </div>
                <div className="w-full py-2 flex flex-col items-center">
                    <div className="w-full px-10 flex flex-col gap-6">
                        <h2 className="text-xl font-mainBold text-primary leading-relaxed capitalize">kategori perhitungan</h2>
                        <ul className="flex flex-col gap-3 border-l border-l-secondary/30 pl-5">
                            {dataRotes.map((route, index) => {
                                const display = Array.isArray(route.title) ? route.title[0] : route.title;
                                const sub = Array.isArray(route.title) && route.title[1] ? ` (${route.title[1]})` : '';
                                return (
                                    <li
                                        key={index}
                                        onClick={() => handleClick(display)}
                                        className="text-lg font-main leading-relaxed hover-list cursor-pointer"
                                    >
                                        <b>{display}</b>{sub}.
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </aside>
            <div className="w-full p-5 flex-1">
                {currentData && (
                    <>
                        <h2 className="text-2xl font-mainBold capitalize leading-relaxed text-primary mb-3">
                            {Array.isArray(currentData.title) ? currentData.title[0] : currentData.title}
                            {Array.isArray(currentData.title) && currentData.title[1] &&
                                <span className="text-black text-lg ml-2">({currentData.title[1]})</span>
                            }
                        </h2>
                        <p className="text-base font-main text-black max-w-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, temporibus delectus! Velit ducimus magni eum doloremque qui, officiis accusamus consectetur.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
