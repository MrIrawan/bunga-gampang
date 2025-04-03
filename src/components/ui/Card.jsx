export default function Card({ children, classname }) {
    return(
        <div className={`flex flex-col justify-between gap-4 ${classname}`}>
            { children }
        </div>
    )
}

function Header({ children, classname }) {
    return(
    <div className={`w-full overflow-hidden ${classname}`}>
            { children }
        </div>
    )
}

function Body({ children, classname }) {
    return(
        <div className={`w-full ${classname}`}>
            { children }
        </div>
    )
}

function Footer({ children, classname }) {
    return(
        <div className={`w-full ${classname}`}>
            { children }
        </div>
    )
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;