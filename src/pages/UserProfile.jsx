import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
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

    if (state.isAuthorized === false) return navigate("/")

    return (
        <>
            <section className="w-full h-screen flex">
                <aside className="border-r border-secondary/30 w-64 p-5 h-full lg:w-1/6">
                    <div className="w-full px-3">
                        <h2 className="text-2xl font-mainBold text-primary leading-tight lg:text-3xl">Bunga <span className="block">Gampang.</span></h2>
                    </div>
                    <div className="h-fit w-full px-3 mt-8">
                        <ul className="flex flex-col gap-6">
                            { dataDashboard.map((data, index) => {
                                return (
                                    <li 
                                        className={`w-full flex items-center gap-3 cursor-pointer ${currentIndex === index ? 'text-primary' : 'text-secondary'}`} 
                                        key={data.id}
                                        onClick={() => setCurrentIndex(index)}
                                    >
                                        <FontAwesomeIcon icon={data.icon} className="text-xl" />
                                        <p className="text-base font-semibold font-main text-black">{ data.title }</p>
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
            <h1 className="text-3xl font-mainBold text-primary mt-3 mb-10">Profil Kamu</h1>
            <div className="w-full flex flex-wrap gap-6">
                <Avatar avatarSize="xl" src={`http://localhost:8800/uploads/${state.user?.profile_photo ?? "default.jpeg"}`}/>
                <div className="w-fit flex flex-col gap-2">
                    <h2 className="text-3xl font-mainBold">{ state.user?.username ?? "user" }</h2>
                    <p className="text-base font-main font-semibold text-secondary">{ state.user?.email ?? "email" }</p>
                </div>
                <div className="w-full h-fit border-l-2 border-primary px-2">
                    <p className="text-base font-main font-semibold">{ state.user?.user_bio ?? "Belum Ada Bio" }</p>
                </div>
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