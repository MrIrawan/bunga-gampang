import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function UserProfile() {

    const { state } = useContext(AuthContext);
    const navigate = useNavigate();

    if (state.isAuthorized === false) return navigate("/")

    return (
        <>
            <section className="w-full pt-16 pb-16">
                <div className="container w-full mx-auto">
                    <div className="w-full flex gap-6 relative">
                        <div className="w-40 h-40 rounded-full overflow-hidden lg:w-36 lg:h-36">
                            <img src={`http://localhost:8800/uploads/${state.user?.profile_photo ?? "default.jpeg"}`} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div className="w-1/2 flex flex-col gap-6">
                            <div className="w-fit">
                                <h2 className="text-2xl font-mainBold capitalize px-2">{ state.user?.username ?? "user"}</h2>
                                <p className="text-base font-main text-secondary px-2">{ state.user?.email ?? "email" }</p>
                            </div>
                            <div className="w-full h-[100px] p-2">
                                <p className="text-base font-main">{ state.user?.bio ?? "Belum Ada Bio" }</p>
                            </div>
                        </div>
                        <div className="hidden w-fit absolute top-2 right-2 md:flex md:flex-col md:gap-2 lg:flex-row lg:items-center lg:gap-4">
                            <a href={`/update/${state.user?.id ?? ""}`}>
                                <button className="font-main text-base border border-primary bg-primary text-text flex items-center gap-2 rounded-sm px-5 py-0.5" id={state.user?.id ?? ""}>
                                    <FontAwesomeIcon icon={faEdit}/>
                                    edit profile
                                </button>
                            </a>
                        <button className="font-main text-base border border-red-600 bg-red-600 text-text flex items-center gap-2 rounded-sm px-5 py-0.5" id={state.user?.id ?? ""}>
                            <FontAwesomeIcon icon={faTrash}/>
                            delete profile
                        </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}