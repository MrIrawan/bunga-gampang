import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faLock, faBuilding, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import Avatar from "../components/ui/Avatar";

export default function UserProfile() {

    const { state } = useContext(AuthContext);
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const dataDashboard = [
        {id: 1, title: "Info Akun Anda", icon: faUser},
        {id: 2, title: "Data & Privasi Anda", icon: faLock},
        {id: 3, title: "Pengaturan Akun", icon: faGear},
    ]

    useEffect(() => {
        if (state.isAuthorized === false) {
            navigate("/masuk");
        }
    }, []);

    return (
        <>
            <section className="w-full h-screen flex">
                <aside className="border-r border-secondary/30 w-fit p-5 h-full lg:w-1/6">
                    <div className="h-fit w-full px-3 mt-8">
                        <ul className="flex flex-col gap-6">
                            { dataDashboard.map((data, index) => {
                                return (
                                    <li 
                                        className={`w-fit border p-4 rounded-lg border-secondary/30 flex items-center gap-3 cursor-pointer ${currentIndex === index ? 'text-primary' : 'text-secondary'}`} 
                                        key={data.id}
                                        onClick={() => setCurrentIndex(index)}
                                    >
                                        <FontAwesomeIcon icon={data.icon} className="text-xl" />
                                    </li>
                                )
                            }) }
                        </ul>
                    </div>
                </aside>
                <div className="container w-full mx-auto h-full py-5 px-7">
                    {/* components here */}
                    { currentIndex === 0 ? <AccountInfo /> 
                        :
                    currentIndex === 1 ? <DataAndPrivacy /> 
                        :
                    <SettingAccount /> }
                </div>
            </section>
        </>
    )
}

function AccountInfo() {

    const { state } = useContext(AuthContext);

    return (
        <>
            <div className="w-full h-full flex flex-col lg:flex-row gap-6">
                <div className="w-full h-1/2 flex flex-col gap-8">
                    <div className="w-full flex gap-8 items-center">
                        <Avatar avatarSize="xl" src={`http://localhost:8800/uploads/${state.user?.profile_photo ?? "default.jpeg"}`}/>
                        <div className="w-fit flex flex-col gap-2">
                            <h1 className="text-3xl my-0 font-mainBold text-primary">{ state.user?.username ?? "user" }</h1>
                            <p className="text-sm font-main text-secondary font-semibold">{ state.user?.email ?? "email" }</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faBuilding} className="text-lg text-secondary" />
                            <p className="text-sm font-main font-semibold text-black">PT. Bunga Gampang</p>
                        </span>
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faLocationDot} className="text-lg text-secondary" />
                            <p className="text-sm font-main font-semibold text-black">Jakarta, Indonesia</p>
                        </span>
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faInstagram} className="text-lg text-secondary" />
                            <p className="text-sm font-main font-semibold text-black">canttguardrell</p>
                        </span>
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-lg text-secondary" />
                            <p className="text-sm font-main font-semibold text-black">Farrel Irawan</p>
                        </span>
                    </div>
                </div>
                <div className="w-full h-1/2"></div>
            </div>
        </>
    )
}

function DataAndPrivacy() {
    return (
        <h1 className="text-3xl font-mainBold text-primary">Data & Privacy</h1>
    )
}

function SettingAccount() {
    return (
        <h1 className="text-3xl font-mainBold text-primary">Setting Account</h1>
    )
}