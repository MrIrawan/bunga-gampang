import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return(
        <footer className="w-full h-40 border-t border-secondary/30 p-5">
            <div className="container w-full mx-auto">
                <div className="w-full flex">
                    <article className="p-5 w-full">
                        <div className="w-fit mx-auto">
                            <h2 className="text-3xl font-mainBold text-primary leading-tight w-fit">Bunga <span className="block">Gampang.</span></h2>
                            <p className="font-main text-base max-w-xs mt-3">web application that helps people to calculate their money with interest.</p>
                        </div>
                    </article>
                    <article className="p-5 w-full">
                        <div className="w-fit mx-auto">
                            <h3 className="text-xl font-mainBold text-primary leading-relaxed">Linked</h3>
                            <div className="w-full mt-3">
                                <ul className="flex gap-10 items-center">
                                    <div className="flex flex-col gap-2">
                                        <li className="text-black font-main text-base leading-relaxed hover-list">
                                            <a href="#">Beranda</a>
                                        </li>
                                        <li className="text-black font-main text-base leading-relaxed hover-list">
                                            <a href="#">Tentang</a>
                                        </li>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <li className="text-black font-main text-base leading-relaxed hover-list">
                                            <a href="#">Mulai Hitung</a>
                                        </li>
                                        <li className="text-black font-main text-base leading-relaxed hover-list">
                                            <a href="#">Blog</a>
                                        </li>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <li className="text-black font-main text-base leading-relaxed hover-list">
                                            <a href="#">layanan kami</a>
                                        </li>
                                        <li className="text-black font-main text-base leading-relaxed hover-list">
                                            <a href="#">kontak kami</a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <article className="p-5 w-full">
                        <div className="w-fit mx-auto">
                            <h3 className="text-xl font-mainBold text-primary leading-relaxed">Connect</h3>
                            <div className="w-full mt-3">
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <div className="flex items-center gap-3">
                                            <FontAwesomeIcon icon={faInstagram} className="text-xl"/>
                                            <div className="flex flex-col gap-1">
                                                <h4 className="font-mainBold text-sm leading-relaxed">@canttguardrell</h4>
                                                <p className="font-main text-xs">Connect with instagram</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center gap-3">
                                            <FontAwesomeIcon icon={faGithub} className="text-xl"/>
                                            <div className="flex flex-col gap-1">
                                                <h4 className="font-mainBold text-sm leading-relaxed">MrIrawan</h4>
                                                <p className="font-main text-xs">Connect with github</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center gap-3">
                                            <FontAwesomeIcon icon={faLinkedinIn} className="text-xl"/>
                                            <div className="flex flex-col gap-1">
                                                <h4 className="font-mainBold text-sm leading-relaxed">Farrel Irawan</h4>
                                                <p className="font-main text-xs">Connect with linkedin</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center gap-3">
                                            <FontAwesomeIcon icon={faEnvelope} className="text-xl"/>
                                            <div className="flex flex-col gap-1">
                                                <h4 className="font-mainBold text-sm leading-relaxed">irawanssfarrel@gmail.com</h4>
                                                <p className="font-main text-xs">Get in touch</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="border-t py-5 flex items-center justify-between mt-6">
                    <p className="font-mainBold text-sm">&copy; 2025 Bunga Gampang. All rights reserved.</p>
                    <p className="font-main text-sm">Built with Farrel Irawan, with passion and precision.</p>
                </div>
            </div>
        </footer>
    );
}