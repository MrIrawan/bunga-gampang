import Card from "./ui/Card"

export default function Blog() {
    return(
        <div className="w-full grid grid-cols-4 gap-[24px]">
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
                        <button className="w-full bg-primary py-3 rounded-lg text-text font-main text-sm">
                            lihat selengkapnya
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
                        <button className="w-full bg-primary py-3 rounded-lg text-text font-main text-sm">
                            lihat selengkapnya
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
                        <button className="w-full bg-primary py-3 rounded-lg text-text font-main text-sm">
                            lihat selengkapnya
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
                        <button className="w-full bg-primary py-3 rounded-lg text-text font-main text-sm">
                            lihat selengkapnya
                        </button>
                    </a>
                </Card.Footer>
            </Card>
        </div>
    )
}