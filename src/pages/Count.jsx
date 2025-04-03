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
                className={`w-[30%] ${isClicked ? 'translate-x-0' : '-translate-x-52'} h-[900px] shadow-md border transition-transform duration-300 ease-out lg:w-[20%]`}
                onClick={() => clickHandlerToAside()}
            >
                {isClicked === true && 
                    <div className={`w-full flex items-center justify-between px-3 flex-wrap gap-4 mt-4`}>
                        <h3 className="text-2xl font-mainBold text-primary leading-relaxed">BG.</h3>
                        <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 rotate-180"/>
                        <hr className="w-full border border-secondary/30"/>
                    </div>
                }
                <div className={`w-full py-2 flex ${isClicked ? 'flex-col items-center' : 'justify-end'}`}>
                    {isClicked === true && 
                        <>
                        
                        </>
                    }
                    {isClicked === false && 
                        <>
                            <div className="w-fit mr-3 pt-4 flex flex-col gap-3 items-center">
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
