import Card from "./ui/Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function Articles() {
    return(
        <>
        <div className="w-full mb-10">
            <h2 className="text-3xl font-mainBold text-primary capitalize leading-relaxed w-fit mx-auto">artikel terbaru bunga gampang</h2>
        </div>
            <div className="w-full p-3 flex items-center justify-center mt-24">
                <div className="hover-list flex items-center gap-3 cursor-pointer">
                    <h2 className="text-lg font-main leading-relaxed capitalize">lihat artikel lainnya</h2>
                    <FontAwesomeIcon icon={faArrowRight} className="-rotate-45"/>
                </div>
            </div>
        </>
    )
}