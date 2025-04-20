import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function Alert({ variant, duration, message }) {
    return (
        <div className="absolute mt-6 right-0 z-[9999px] w-fit flex items-center gap-5 bg-green-100 ring ring-green-400 p-5 rounded-2xl max-w-md">
            <span className="w-8 h-8 p-3 bg-green-400 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="text-green-800" />
            </span>
            <div className="w-full">
                <p className="font-main text-green-700 font-semibold">{ message }</p>
            </div>
        </div>
    )
}