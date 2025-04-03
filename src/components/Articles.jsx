import Card from "./ui/Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function Articles() {
    return(
        <>
        <div className="w-full mb-10">
            <h2 className="text-3xl font-mainBold text-primary capitalize leading-relaxed w-fit mx-auto">artikel dari bunga gampang</h2>
        </div>
            <div className="w-full grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-4">
                <Card classname='shadow-xl border rounded-lg'>
                    <Card.Header>
                        <img src="https://placehold.co/500x300" alt="photo 1" className="w-full h-full object-cover"/>
                    </Card.Header>
                    <Card.Body classname='px-6'>
                        <h3 className="text-2xl font-mainBold text-primary capitalize">title</h3>
                        <p className="text-lg foont-main text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dicta ad rerum iure necessitatibus quas.</p>
                    </Card.Body>
                    <Card.Footer classname='px-6 py-6'>
                        <a href="#">
                            <button className="w-full bg-primary py-3 rounded-lg text-text font-main text-sm flex justify-center items-center gap-2">
                                lihat selengkapnya
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </a>
                    </Card.Footer>
                </Card>
                <Card classname='shadow-xl border rounded-lg'>
                    <Card.Header>
                        <img src="https://placehold.co/500x300" alt="photo 1" className="w-full h-full object-cover"/>
                    </Card.Header>
                    <Card.Body classname='px-6'>
                        <h3 className="text-2xl font-mainBold text-primary capitalize">title</h3>
                        <p className="text-lg foont-main text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dicta ad rerum iure necessitatibus quas.</p>
                    </Card.Body>
                    <Card.Footer classname='px-6 py-6'>
                        <a href="#">
                            <button className="w-full bg-primary py-3 rounded-lg text-text font-main text-sm flex justify-center items-center gap-2">
                                lihat selengkapnya
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </a>
                    </Card.Footer>
                </Card>
                <Card classname='shadow-xl border rounded-lg'>
                    <Card.Header>
                        <img src="https://placehold.co/500x300" alt="photo 1" className="w-full h-full object-cover"/>
                    </Card.Header>
                    <Card.Body classname='px-6'>
                        <h3 className="text-2xl font-mainBold text-primary capitalize">title</h3>
                        <p className="text-lg foont-main text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dicta ad rerum iure necessitatibus quas.</p>
                    </Card.Body>
                    <Card.Footer classname='px-6 py-6'>
                        <a href="#">
                            <button className="w-full bg-primary py-3 rounded-lg text-text font-main text-sm flex justify-center items-center gap-2">
                                lihat selengkapnya
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </a>
                    </Card.Footer>
                </Card>
                <Card classname='shadow-xl border rounded-lg'>
                    <Card.Header>
                        <img src="https://placehold.co/500x300" alt="photo 1" className="w-full h-full object-cover"/>
                    </Card.Header>
                    <Card.Body classname='px-6'>
                        <h3 className="text-2xl font-mainBold text-primary capitalize">title</h3>
                        <p className="text-lg foont-main text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dicta ad rerum iure necessitatibus quas.</p>
                    </Card.Body>
                    <Card.Footer classname='px-6 py-6'>
                        <a href="#">
                            <button className="w-full bg-primary py-3 rounded-lg text-text font-main text-sm flex justify-center items-center gap-2">
                                lihat selengkapnya
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </a>
                    </Card.Footer>
                </Card>
            </div>
            <div className="w-full p-3 flex items-center justify-center mt-24">
                <div className="hover-list flex items-center gap-3 cursor-pointer">
                    <h2 className="text-lg font-main leading-relaxed capitalize">lihat artikel lainnya</h2>
                    <FontAwesomeIcon icon={faArrowRight} className="-rotate-45"/>
                </div>
            </div>
        </>
    )
}