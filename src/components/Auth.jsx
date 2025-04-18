import axios from "axios";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Auth({ variant }) {

    return (
        <div className="w-full absolute-center p-16">
            <div className="container w-full mx-auto h-[600px] shadow-lg border rounded-xl flex items-center lg:max-w-[1024px]">
                { variant === "register" ? <Register /> : <Login /> }
            </div>
        </div>
    )

}

// register component

function Register() {

    const [ formData, setFormData ] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        console.log(formData);
        
        try {
            const response = await fetch("http://localhost:8800/api/daftar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const responseData = await response.json();

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className="w-1/2 bg-primary h-full p-3"></div>
            <div className="w-1/2 bg-text h-full px-5 py-7 flex items-center">
                <div className="w-full flex flex-col">
                    <h2 className="text-2xl mb-6 font-mainBold text-black leading-tight lg:text-3xl lg:mx-auto">Halo, Selamat datang di <span className="block text-primary">Bunga Gampang.</span></h2>
                    <div className="w-full h-[400px] lg:w-4/5 lg:mx-auto">
                        <form onSubmit={(e) => handleSubmitRegister(e)} className="w-full h-full flex flex-col">
                            <div className="w-full flex flex-col gap-1 my-3">
                                <label htmlFor="name" className="font-mainBold text-sm">Nama Lengkap</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className="border-b py-2 focus:outline-none focus:border-b-primary font-main text-base"
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-1 my-3">
                                <label htmlFor="email" className="font-mainBold text-sm">Email Anda</label>
                                <input 
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="border-b py-2 focus:outline-none focus:border-b-primary font-main text-base"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-1 my-3">
                                <label htmlFor="password" className="font-mainBold text-sm">Password Email</label>
                                <input 
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="border-b py-2 focus:outline-none focus:border-b-primary font-main text-base"
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                            <div className="w-full mt-auto">
                                <button type="submit" className="font-main border w-full mb-6 py-2 bg-primary text-text">Daftar Sekarang</button>
                                <p className="text-sm font-main mt-2 text-center">udah punya akun? <a href="/masuk" className="text-primary">masuk disini</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

// login component

function Login() {
    return (
        <>
            <div className="w-1/2 bg-primary h-full p-3"></div>
            <div className="w-1/2 bg-text h-full px-5 py-7">
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-mainBold text-black leading-tight lg:text-3xl">Selamat datang kembali di <span className="block text-primary">Bunga Gampang.</span></h2>
                    <div className="w-full h-[400px] lg:w-4/5 lg:mx-auto">
                        <form action="" className="w-full h-full flex flex-col justify-center">
                            <div className="w-full flex flex-col gap-1 mb-3 mt-auto">
                                <label htmlFor="email" className="font-mainBold text-sm">Email Anda</label>
                                <input type="email" name="email" id="email" className="border-b py-2 focus:outline-none focus:border-b-primary font-main text-base"/>
                            </div>
                            <div className="w-full flex flex-col gap-1 mt-3 mb-auto">
                                <label htmlFor="password" className="font-mainBold text-sm">Password Email</label>
                                <input type="password" name="password" id="password" className="border-b py-2 focus:outline-none focus:border-b-primary font-main text-base"/>
                            </div>
                            <div className="w-full">
                                <button type="submit" className="font-main border w-full mb-6 py-2 bg-primary text-text">Masuk Sekarang</button>
                                <p className="text-sm font-main mt-2 text-center">belum punya akun? <a href="/daftar" className="text-primary">daftar disini</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}