export default function Hero() {
    return(
        <div className="flex items-center justify-center flex-wrap gap-7 lg:flex-nowrap">
            <div className="w-1/2 flex flex-col gap-3 md:w-full md:items-center lg:items-start lg:w-1/2">
                <p className="text-sm font-main font-semibold text-secondary capitalize">hitung bunga jadi lebih cepat pake bunga gampang!</p>
                <h2 className="font-mainBold text-3xl font-bold capitalize leading-tight max-w-xl md:text-center lg:text-left lg:text-5xl lg:max-w-2xl lg:leading-tight">
                    mulai prediksi uang dengan bunga anda untuk <span className="text-primary">masa mendatang.</span>
                </h2>
                <h3 className="text-lg font-main font-semibold text-secondary max-w-lg leading-tight md:text-center lg:text-left">kami, bunga gampang siap membantu anda dengan perhitungan yang cepat dan akurat.</h3>
                <div className="flex items-center gap-3 mt-5">
                    <a href="#">
                        <button className="px-3 py-2 bg-primary rounded-lg text-text capitalize font-mainLight font-semibold text-sm leading-relaxed transition-colors duration-300 ease-out hover:bg-primary/90">mulai hitung</button>
                    </a>
                    <hr className="border border-black h-5"/>
                    <a href="#">
                        <button className="px-3 py-2 bg-secondary rounded-lg text-text capitalize font-mainLight font-semibold text-sm leading-relaxed transition-colors duration-300 ease-out hover:bg-secondary/90">pilih metode perhitungan</button>
                    </a>
                </div>
            </div>
            <div className="w-full flex justify-center lg:w-1/2 lg:justify-end">
                <img src="https://placehold.co/500x500" alt="" className="bg-red-500"/>
            </div>
        </div>
    );
}