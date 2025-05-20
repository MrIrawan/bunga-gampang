import { useRef } from "react"

export default function BlogJumbotron() {

    const chainTitle = ["finansial", "gaya hidup", "crypto & blockchain", "investasi", "hobi"]

    const chainRef = useRef(null);
    let currentIndex = 0

    setInterval(() => {
        if (currentIndex === chainTitle.length) {
            currentIndex = 0;
        }

        if (currentIndex === 0) currentIndex = 1;

        chainRef.current.textContent = chainTitle[currentIndex];
        currentIndex++;
    }, 4000);


    return (
        <div className="container w-full mx-auto">
                <h2 className="text-4xl font-mainBold text-primary capitalize">stay updated with our blog news</h2>
                <blockquote className="mt-2">
                    <q className="text-lg capitalize font-main font-semibold text-black">dapatkan berita terbaru dunia dengan topik <mark className="bg-primary text-text font-mainBold selection:bg-text selection:text-primary">tak terhingga</mark> di bunga gampang</q>
                </blockquote>
                <p className="text-3xl font-mainBold font-semibold capitalize mt-6">dapatkan pengetahuan seputar{" "}
                        <span className="text-primary capitalize" ref={chainRef}>Finansial</span>
                </p>
        </div>
    )
}