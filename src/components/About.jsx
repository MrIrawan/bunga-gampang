export default function About() {
    return(
        <div className="flex flex-col">
            <div className="my-4">
                <h2 className="text-primary text-3xl font-mainBold font-semibold leading-relaxed capitalize mb-4">apa itu bunga gampang?</h2>
                <div>
                    <p className="text-base font-main leading-relaxed text-justify max-w-5xl capitalize">
                        bunga gampang adalah sebuah software berbasis web untuk mempermudah masyarakat
                        dalam menghitung total uang mereka jika dikalikan oleh bunga.
                        kami membantu masyarakat agar lebih cepat dalam menghitung operasi bunga yang terjadi di uang mereka,
                        tidak perlu repot-repot menulis di kertas, tidak perlu pusing persoalan rumus, karna sekarang semuanya ada di bunga gampang! 
                    </p>
                </div>
            </div>
            <div className="my-4">
                <div>
                    <p className="text-base font-main leading-relaxed text-justify max-w-5xl capitalize">
                        kami dapat melakukan operasi perhitungan bunga apapun, jadi anda sebagai orang yang resah
                        karna harus mencatat di kertas, bolak balik searching rumus, jadi lebih gampang bersama kami.
                        bunga tunggal, majemuk, mingguan, bulanan, dan bunga apapun, kami siap menghitung dan memberikan
                        hasil yang cepat dan akurat buat anda!
                    </p>
                </div>
            </div>
        </div>
    );
}