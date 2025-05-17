import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";


export default function Features() {
    return (
        <div className="flex flex-col items-center gap-10">
            <h2 className="text-3xl font-mainBold font-semibold text-primary capitalize leading-relaxed">fitur unggulan dari bunga gampang</h2>
            <div className="p-3 w-full h-screen flex gap-6 lg:w-3/4 lg:gap-8">
                {/* hitung bunga */}
                <div className="ring ring-primary bg-text rounded-lg w-full h-full py-6 px-4 lg:w-1/2">
                    <h2 className="text-2xl text-black font-mainBold lg:text-3xl">Hitung Bunga</h2>
                    <p className="text-base font-main text-black mt-3">
                        dengan rumus perhitungan milik kami, kamu bisa bebas memilih metode perhitungan bunga yang kamu mau!
                    </p>
                    <hr className="border border-secondary/30 mt-6"/>
                    <div className="mt-8 w-full h-3/4">
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-center gap-3 mx-4">
                                <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl"/>
                                <p className="text-base font-main font-semibold text-black capitalize">rumus perhitungan lengkap</p>
                            </li>
                            <li className="flex items-center gap-3 mx-4">
                                <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl"/>
                                <p className="text-base font-main font-semibold text-black capitalize">gratis pakai kapanpun</p>
                            </li>
                            <li className="flex items-center gap-3 mx-4">
                                <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl"/>
                                <p className="text-base font-main font-semibold text-black capitalize">hasil cepat dan akurat</p>
                            </li>
                            <li className="flex items-center gap-3 mx-4">
                                <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl"/>
                                <p className="text-base font-main font-semibold text-black capitalize">gratis edukasi setiap bunga</p>
                            </li>
                        </ul>
                        <div className="py-6 px-4 bg-text rounded-md h-56 mt-6 ring ring-secondary/30 overflow-hidden">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-mainBold capitalize lg:text-2xl">edukasi setiap bunga</h2>
                                <FontAwesomeIcon icon={faCircleQuestion} className="text-xl"/>
                            </div>
                            <hr className="border border-secondary/30 mt-3"/>
                            <p className="font-main leading-normal mt-3">
                                <span className="font-semibold">edukasi setiap bunga</span>{" "}
                                merujuk pada informasi singkat mengenai rumus bunga yang dipilih,
                                sehingga kamu dapat menghitung bunga sekaligus memahami tentang bunga tersebut.
                            </p>
                        </div>
                    </div>
                    <a href="/" className="block mt-auto">
                        <button className="w-full bg-primary text-text py-2.5 font-main rounded-md capitalize">
                            mulai hitung sekarang
                        </button>
                    </a>
                </div>
                {/* artikel Bunga Gampang */}
                <div className="ring ring-primary bg-text rounded-lg w-full h-full py-6 px-4 lg:w-1/2">
                    <h2 className="text-2xl text-black font-mainBold lg:text-3xl">Artikel Bunga Gampang</h2>
                    <p className="text-base font-main text-black mt-3">
                        kami menghadirkan fitur artikel dengan berbagai kategori, sehingga kamu bisa membaca berita terbaru dari sini!
                    </p>
                    <hr className="border border-secondary/30 mt-6"/>
                    <div className="mt-8 w-full h-3/4">
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-center gap-3 mx-4">
                                <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl"/>
                                <p className="text-base font-main font-semibold text-black capitalize">kategori artikel super lengkap</p>
                            </li>
                            <li className="flex items-center gap-3 mx-4">
                                <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl"/>
                                <p className="text-base font-main font-semibold text-black capitalize">tidak perlu daftar untuk baca</p>
                            </li>
                            <li className="flex items-center gap-3 mx-4">
                                <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl"/>
                                <p className="text-base font-main font-semibold text-black capitalize">artikel terus di update</p>
                            </li>
                            <li className="flex items-center gap-3 mx-4">
                                <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl"/>
                                <p className="text-base font-main font-semibold text-black capitalize">upload artikel kamu sendiri</p>
                            </li>
                        </ul>
                        <div className="py-6 px-4 h-56 bg-text rounded-md mt-6 ring ring-secondary/30 overflow-hidden">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-mainBold capitalize lg:text-2xl">upload artikel</h2>
                                <FontAwesomeIcon icon={faCircleQuestion} className="text-xl"/>
                            </div>
                            <hr className="border border-secondary/30 mt-3"/>
                            <p className="font-main leading-normal mt-3">
                                untuk menggunakan fitur <span className="font-semibold">upload artikel</span>{" "}
                                diperlukan beberapa prosedur yang harus kamu lakukan. salah satunya kamu perlu daftar/login agar memiliki profil.
                            </p>
                        </div>
                    </div>
                    <a href="/" className="block mt-auto">
                        <button className="w-full bg-primary text-text py-2.5 font-main rounded-md capitalize">
                            mulai baca sekarang
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}