import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function BlogNavbar() {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <header className="w-full shadow-xl">
            <nav className="container w-full mx-auto flex items-center justify-between gap-6 py-4">
                <div className="w-fit">
                    <h2 className="text-xl font-mainBold text-primary leading-tight lg:text-2xl">Bunga <span className="block">Gampang.</span></h2>
                </div>
                <div className="w-full relative">
                    <FontAwesomeIcon icon={faSearch} className="py-1.5 px-3 rounded-md text-lg absolute top-1 left-0"/>
                    <input 
                        type="search" 
                        name="search_query" 
                        id="search_query" 
                        className="border border-secondary/30 rounded-md pl-10 pr-3 py-2 w-full font-main font-semibold focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300 ease-out"
                        placeholder="Cari artikel..."
                    />
                </div>
                <div className="w-fit relative">
                    <FontAwesomeIcon icon={faBars} className="text-3xl" onClick={() => setIsClicked(!isClicked)}/>
                    <div className={`absolute border border-secondary/30 rounded-md top-12 right-0 bg-white p-5 w-[300px] ${isClicked ? "block" : "hidden"}`}>
                        <ul className="flex flex-col gap-3">
                            <li className="font-main text-base leading-relaxed hover-list">
                                <a href="/">Pergi ke Beranda</a>
                            </li>
                            <li className="font-main text-base leading-relaxed hover-list">
                                <a href="/#tentang">Kategori Artikel</a>
                            </li>
                            <li className="font-main text-base leading-relaxed hover-list">
                                <a href="/count">Upload Artikel Dari Kamu</a>
                            </li>
                            <li className="font-main text-base leading-relaxed hover-list">
                                <a href="/blog">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}