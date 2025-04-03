import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return(
        <header className="w-full shadow-xl">
            <nav className="w-4/5 mx-auto flex items-center justify-between">
                <div className="p-5 w-1/2 flex items-center justify-start gap-10">
                    <div className="w-fit">
                        <h2 className="text-xl font-mainBold text-primary leading-tight">Bunga <span className="block">Gampang.</span></h2>
                    </div>
                    <div className="w-fit">
                        <ul className="flex items-center gap-5">
                            <li className="font-main text-base leading-relaxed hover-list">
                                <a href="#">Beranda</a>
                            </li>
                            <li className="font-main text-base leading-relaxed hover-list">
                                <a href="#">Tentang</a>
                            </li>
                            <li className="font-main text-base leading-relaxed hover-list">
                                <a href="#">Mulai Hitung</a>
                            </li>
                            <li className="font-main text-base leading-relaxed hover-list">
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-5 w-1/2 flex items-center justify-end">
                    <div className="w-fit cursor-pointer">
                        <FontAwesomeIcon icon={faUser} className="text-2xl"/>
                    </div>
                </div>
            </nav>
            <div className="w-full p-1 bg-primary">
                <p className="font-mainBold text-center font-medium text-base text-text leading-relaxed">Siap bantu anda semua dengan prediksi akurat dan hasil yang cepat!</p>
            </div>
        </header>
    );
}