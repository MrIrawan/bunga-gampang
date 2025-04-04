import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceDizzy } from "@fortawesome/free-solid-svg-icons/faFaceDizzy";

export default function NotFound() {
    return(
        <main className="h-screen flex items-center justify-center">
            <div>
                <h2>
                    4 <FontAwesomeIcon icon={faFaceDizzy}/> 4
                </h2>
                <p>waduhh kayanya halaman yang kamu cari gaada nihh.</p>
            </div>
        </main>
    );
}