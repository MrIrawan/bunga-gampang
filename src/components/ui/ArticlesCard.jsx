export default function ArticlesCard({ variant = 'default' }) {
    return (
        <>
            <div className="shadow-lg border w-full h-[400px] flex lg:w-3/4">
                <article className="w-3/5 h-[400px] overflow-hidden">
                    <img src="/images/saham.jpg" alt="" className="w-full h-full object-cover"/>
                </article>
                <article className="w-full py-3 px-6">
                    <div className="w-fit flex gap-3 items-center mb-4 mt-3">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-red-100 rounded-full overflow-hidden">
                                <img src="https://placehold.co/600x400" alt="" className="w-full h-full object-cover"/>
                            </div>
                            <p className="text-sm font-main font-semibold text-secondary">Posted By Admin</p>
                        </div>
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <p className="text-sm font-main text-secondary font-semibold">On 13 April 2025</p>
                    </div>
                    <div className="w-full flex flex-col mb-4">
                        <h2 className="text-2xl font-mainBold mb-4 leading-tight">Bagaimana Cara Memulai saham untuk pemula?</h2>
                        <p className="text-sm font-main text-secondary font-semibold lg:max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore velit nobis! Fugiat cum eius, doloribus mollitia obcaecati at reprehenderit.</p>
                    </div>
                    <div className="w-full lg:max-w-md">
                        <span 
                            className={`border border-secondary/60 py-1 px-5 mx-1 my-1 rounded-full text-base font-main cursor-pointer transition-all duration-200 ease-in-out`}
                        >
                            financial
                        </span>
                        <span 
                            className={`border border-secondary/60 py-1 px-5 mx-1 my-1 rounded-full text-base font-main cursor-pointer transition-all duration-200 ease-in-out`}
                        >
                            market sight
                        </span>
                        <span 
                            className={`border border-secondary/60 py-1 px-5 mx-1 my-1 rounded-full text-base font-main cursor-pointer transition-all duration-200 ease-in-out`}
                        >
                            blockchain
                        </span>
                    </div>
                </article>
            </div>
        </>
    );
}