import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return(
        <footer className="w-full h-40 border-t border-secondary/30 p-5">
            <div className="container w-full mx-auto">
                <div className="w-full flex">
                    <article className="p-5 w-full">
                        <h2 className="text-3xl font-mainBold text-primary leading-tight">Bunga <span className="block">Gampang.</span></h2>
                    </article>
                    <article className="p-5 w-full">
                        <h3 className="text-xl font-mainBold text-primary leading-relaxed">Linked</h3>
                        <div className="w-full">
                            <ul className="flex gap-10 items-center">
                                <div className="flex flex-col gap-2 my-3">
                                    <li className="text-black font-main text-base leading-relaxed">
                                        <a href="#">Beranda</a>
                                    </li>
                                    <li className="text-black font-main text-base leading-relaxed">
                                        <a href="#">Tentang</a>
                                    </li>
                                </div>
                                <div className="flex flex-col gap-2 my-3">
                                    <li className="text-black font-main text-base leading-relaxed">
                                        <a href="#">Mulai Hitung</a>
                                    </li>
                                    <li className="text-black font-main text-base leading-relaxed">
                                        <a href="#">Blog</a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </article>
                    <article className="p-5 w-full">
                        <h3 className="text-xl font-mainBold text-primary leading-relaxed">Connect</h3>
                        
                    </article>
                </div>
            </div>
        </footer>
    );
}