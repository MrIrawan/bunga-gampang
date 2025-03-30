import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function FeaturesCard({ data }) {
    return (
        <>
            {data.map((item, index) => (
                <div key={index} className="w-full shadow-md transition-all duration-200 ease-in-out rounded-xl overflow-hidden flex flex-col hover:shadow-lg">
                    <div className="w-full h-1/2 overflow-hidden">
                        <img src="https://placehold.co/300x200" alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-full px-5 py-5">
                        <h2 className="text-lg font-mainBold leading-relaxed my-3">{ item.title }</h2>
                        <p className="text-base font-main leading-tight my-3">{ item.description }</p>
                    </div>
                    <div className="w-full px-8 py-2">
                        <div className={`${item.features ? 'flex flex-col gap-4' : 'hidden'}`}>
                            { item.features.map((feature, index) => (
                                <div className="w-full flex items-center gap-2" key={index}>
                                    <FontAwesomeIcon icon={faCheck} className="text-green-400 mr-3" /> 
                                    <p className="text-base font-main leading-relaxed">{ feature }</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full px-8 py-5 mt-6">
                        <a href="#">
                            <button className="flex items-center gap-2 group">
                                <p className="font-main text-base leading-relaxed">pelajari ini</p>
                                <FontAwesomeIcon icon={faArrowRight} className="transition-all duration-300 ease-in-out group-hover:translate-x-2"/>
                            </button>
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
}