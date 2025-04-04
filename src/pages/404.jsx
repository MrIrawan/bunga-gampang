import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceDizzy } from "@fortawesome/free-regular-svg-icons";

export default function NotFound() {
    return(
        <main className="flex items-center justify-center">
            <div className="container h-[700px] w-full mx-auto flex items-center justify-center">
                <div className="hidden lg:flex flex-col lg:w-1/2">
                    <h2 className="text-black font-mainBold text-4xl leading-normal max-w-md lg:text-5xl lg:max-w-xl lg:leading-normal">anda sudah mencapai akhir <span className="text-primary">halaman.</span></h2>
                    <p className="text-lg font-main leading-relaxed max-w-sm">sepertinya sesuatu telah terjadi sehingga membuat anda berakhir disini.</p>
                    <div className="flex items-center gap-5 mt-4">
                        <a href="/">
                            <button className="bg-secondary text-text font-main text-base capitalize px-4 py-2 rounded-xl transition-colors duration-200 ease-in-out hover:bg-secondary/90">balik lagi ke beranda</button>
                        </a>
                        <a href="/count/000">
                            <button className="bg-primary text-text font-main text-base capitalize px-4 py-2 rounded-xl transition-colors duration-200 ease-in-out hover:bg-primary/90">balik lagi ke perhitungan</button>
                        </a>
                    </div>
                </div>
                <div className="w-fit flex flex-col items-center lg:w-1/2">
                    <h2 className="text-8xl font-main leading-relaxed">
                        4 <FontAwesomeIcon icon={faFaceDizzy}/> 4
                    </h2>
                    <p className="text-lg font-main leading-relaxed">halaman yang anda cari tidak di temukan.</p>
                </div>
            </div>
        </main>
    );
}