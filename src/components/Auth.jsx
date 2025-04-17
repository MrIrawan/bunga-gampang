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

    return (
        <>
            <div className="w-1/2 bg-primary h-full p-3"></div>
            <div className="w-1/2 bg-text h-full px-5 py-7 flex items-center">
                <div className="w-full flex flex-col">
                    <h2 className="text-2xl mb-6 font-mainBold text-black leading-tight lg:text-3xl lg:mx-auto">Halo, Selamat datang di <span className="block text-primary">Bunga Gampang.</span></h2>
                    <div className="w-full h-[400px] lg:w-4/5 lg:mx-auto">
                        <form action="" className="w-full h-full flex flex-col">
                            <div className="w-full flex flex-col gap-1 my-5">
                                <label htmlFor="name" className="font-mainBold text-sm">Nama Lengkap</label>
                                <input type="text" name="name" id="name" className="border-b py-2 focus:outline-none focus:border-b-primary font-main text-base"/>
                            </div>
                            <div className="w-full flex flex-col gap-1 my-5">
                                <label htmlFor="email" className="font-mainBold text-sm">Email Anda</label>
                                <input type="email" name="email" id="email" className="border-b py-2 focus:outline-none focus:border-b-primary font-main text-base"/>
                            </div>
                            <div className="w-full flex flex-col gap-1 my-5">
                                <label htmlFor="password" className="font-mainBold text-sm">Password Email</label>
                                <input type="password" name="password" id="password" className="border-b py-2 focus:outline-none focus:border-b-primary font-main text-base"/>
                            </div>
                            <div className="w-full mt-auto">
                                <button type="submit" className="font-main border w-full py-2 bg-primary text-text">Daftar Sekarang</button>
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
                </div>
            </div>
        </>
    )
}