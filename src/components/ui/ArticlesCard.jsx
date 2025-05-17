import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ArticlesCard({ variant = "small", classname }) {
    return (
        <>
            <article className={`${classname} shadow-lg bg-text overflow-hidden relative group ${variant === "small" ? "w-[450px] h-[530px] flex flex-col" : "w-full h-96 lg:w-[70%] lg:h-[530px]"}`}>
                { variant === "small" && smallArticleCard() }
            </article>
        </>
    );
}

function smallArticleCard() {
    return (
        <>
             {/* card header */}
                <div className="w-full relative h-60 bg-green-500 overflow-hidden">
                    <img src="https://placehold.co/300x200" alt="" className="w-full h-full object-cover"/>
                    <span className="bg-text w-fit rounded-xl absolute top-3 left-3 py-0.5 px-3">
                        <p className="text-sm font-main text-secondary font-semibold">8 Februari 2024</p>
                    </span>
                </div>
                {/* card content (body) */}
                <div className="w-full py-3 px-3">
                    {/* user profile */}
                    <div className="w-full flex items-center gap-2">
                        <div className="w-10 h-10 overflow-hidden rounded-full">
                            <img src="https://placehold.co/50x50" alt=""  className="w-full h-full object-cover"/>
                        </div>
                        <hr className="w-2 h-2 rounded-full bg-primary"/>
                        <p className="text-sm font-main text-black font-semibold">Posted By Admin</p>
                    </div>
                    {/* article title */}
                    <div className="mt-2">
                        <h4 className="text-2xl font-mainBold text-black leading-relaxed capitalize">judul artikel</h4>
                        <div className="flex flex-wrap w-full gap-1 mt-2">
                            <span className="border border-secondary/30 py-0.5 px-5 my-1 rounded-full h-fit text-base font-main cursor-pointer">insight</span>
                            <span className="border border-secondary/30 py-0.5 px-5 my-1 rounded-full h-fit text-base font-main cursor-pointer">finance</span>
                            <span className="border border-secondary/30 py-0.5 px-5 my-1 rounded-full h-fit text-base font-main cursor-pointer">lifestyle</span>
                            <span className="border border-secondary/30 py-0.5 px-5 my-1 rounded-full h-fit text-base font-main cursor-pointer">blockchain & crypto</span>
                        </div>
                    </div>
                </div>
                {/* card footer */}
                <div className="w-full mt-auto py-4 px-3 bg-primary absolute bottom-0 translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
                    <a href="/">
                        <button className="font-main text-text font-medium flex items-center">
                            Baca Selengkapnya
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
                        </button>
                    </a>
                </div>
        </>
    )
}