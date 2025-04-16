import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ArticlesCard({ variant = 'default', data }) {
    return (
        <>
            <div key={data.id} className="shadow-lg border w-full h-[400px] flex lg:w-full">
                {/* article image */}
                <article className="w-3/5 h-full overflow-hidden lg:w-4/5">
                    <img src={data.image_url} alt={`image-${data.id}`} className="w-full h-full object-cover"/>
                </article>
                {/* article content */}
                <article className="w-full py-3 px-6 flex flex-col">
                    {/* author and date */}
                    <div className="w-fit flex gap-3 items-center mb-4 mt-3">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-red-100 rounded-full overflow-hidden">
                                <img src="https://placehold.co/600x400" alt="" className="w-full h-full object-cover"/>
                            </div>
                            <p className="text-sm font-main font-semibold text-secondary">Posted By { data.posted }</p>
                        </div>
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <p className="text-sm font-main text-secondary font-semibold">On { new Date(data.created_at).toLocaleString("id-ID", {day: "numeric", year: "numeric", month: "long"}) }</p>
                    </div>

                    {/* title and description */}
                    <div className="w-full flex flex-col mb-5">
                        <h2 className="text-2xl font-mainBold mb-4 leading-tight">{ data.title }</h2>
                        <p className="text-sm font-main text-secondary font-semibold lg:max-w-md">{ data.description }</p>
                    </div>

                    {/* for categories tags */}
                    <div className="w-full lg:max-w-md">
                        { Array.isArray(data.category.tags) ? data.category.tags.map((article, key) => (
                            <span 
                                key={key}
                                className={`border border-secondary/60 py-1 px-5 mx-1 my-1 rounded-full text-base font-main cursor-pointer transition-all duration-200 ease-in-out`}
                            >
                                { article }
                            </span>
                        )) : <span 
                                className={`border border-secondary/60 py-1 px-5 mx-1 my-1 rounded-full text-base font-main cursor-pointer transition-all duration-200 ease-in-out`}
                            >
                                { data.category.tags }
                            </span> }
                    </div>

                    {/* read more button (footer) */}
                    <div className="w-fit mt-auto mb-2">
                        <a href="#" className="flex items-center gap-2 text-base font-main hover-list">
                            Read More
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                </article>
            </div>
        </>
    );
}