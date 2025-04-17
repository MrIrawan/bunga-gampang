export default function Auth({ variant }) {

    return (
        <div className="w-full absolute-center">
            <div className="container w-full mx-auto">
                { variant === "register" ? <Register /> : <Login /> }
            </div>
        </div>
    )

}

// register component

function Register() {

}

// login component

function Login() {

}