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
            <div className="w-1/2 bg-text h-full px-5 py-7">
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-mainBold text-black leading-tight lg:text-3xl">Halo, Selamat datang di <span className="block text-primary">Bunga Gampang.</span></h2>
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