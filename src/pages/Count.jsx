import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

export default function Count() {

    const [isClicked, setIsClicked] = useState(false);

    const clickHandlerToAside = () => {
        setIsClicked(!isClicked);
    }

    return(
        <>
            <aside 
                className={`w-[400px] ${isClicked ? 'translate-x-0' : '-translate-x-72'} h-[900px] shadow-md border transition-transform duration-300 ease-out lg:w-[20%]`}
                onClick={() => clickHandlerToAside()}
            >
                {isClicked === true && 
                    <div className={`w-full flex items-center justify-between px-10 flex-wrap gap-4 my-4`}>
                        <h3 className="text-2xl font-mainBold text-primary leading-relaxed">BG.</h3>
                        <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 rotate-180"/>
                        <hr className="w-full border border-secondary/30"/>
                    </div>
                }
                <div className={`w-full py-2 flex ${isClicked ? 'flex-col items-center' : 'justify-end'}`}>
                    {isClicked === true && 
                        <>
                            <div className="w-full px-10 flex flex-col gap-6">
                                <h2 className="text-xl font-mainBold text-primary leading-relaxed capitalize">kategori perhitungan</h2>
                                <div className="w-full">
                                    <ul className="flex flex-col gap-3 border-l border-l-secondary/30 pl-5">
                                        <li className="text-lg font-main leading-relaxed hover-list cursor-pointer">
                                            contoh bunga
                                        </li>
                                        <li className="text-lg font-main leading-relaxed hover-list cursor-pointer">
                                            contoh bunga
                                        </li>
                                        <li className="text-lg font-main leading-relaxed hover-list cursor-pointer">
                                            contoh bunga
                                        </li>
                                        <li className="text-lg font-main leading-relaxed hover-list cursor-pointer">
                                            contoh bunga
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    }
                    {isClicked === false && 
                        <>
                            <div className="w-fit mr-8 pt-4 flex flex-col gap-3 items-center lg:mr-6">
                                <h3 className="text-2xl font-mainBold text-primary">BG.</h3>
                                <hr className="border border-secondary/30 w-full"/>
                                <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5"/>
                            </div>
                        </>
                    }
                </div>
            </aside>
        </>
    );
}
