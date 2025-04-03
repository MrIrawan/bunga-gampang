import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import FeaturesCard from "./ui/FeaturesCard";

const firstFeatures = [
    {
        title: 'hasil dengan akurasi tinggi!',
        description: 'karna sistem kami menggunakan rumus untuk menghitung hasil, maka hasil yang disajikan 100% akurat.',
        features: ['hasil cepat dan akurat', 'histori hitung untuk memudahkan anda','100% akurasi']
    },
    {
        title: 'tidak perlu membayar, gratis pakai sepuasnya.',
        description: 'kami membuat bunga gampang gratis, kami membantu masyarakat dalam menghitung uang mereka.',
        features: ['gratis pakai', 'tidak harus membership', 'pakai sepuasnya kapanpun dan dimanapun']
    },
    {
        title: 'hitung cepat ga pake lama!',
        description: 'sistem kami mengolah hasil inputan anda menggunakan rumus! tak perlu khawatir hasil akan meleset dari prediksi.',
        features: ['rumus bunga tunggal', 'rumus bunga majemuk','rumus bunga bulanan']
    },
]

export default function Features() {
    return (
        <div className="flex flex-col items-center gap-10">
            <h2 className="text-3xl font-mainBold font-semibold text-primary capitalize leading-relaxed">kenapa harus bunga gampang?</h2>
            <div className="w-full flex justify-between gap-8">
                <div className="w-full py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                    <FeaturesCard data={firstFeatures} />
                </div>
            </div>
        </div>
    );
}