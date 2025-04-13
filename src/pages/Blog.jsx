import { categories } from '../../public/categories.js'

export default function Blog() {
    return (
        <section className='w-full pt-3 pb-3'>
            <div className="container w-full mx-auto">
                <div className="w-full flex flex-col gap-6">
                    <div className='w-full p-3'>
                        <h2 className='text-2xl font-mainBold mx-1'>browse by categories</h2>
                        <div className='w-full mt-4 mb-6 flex flex-wrap lg:w-1/2'>
                            { categories.map((item, index) => (
                                <span key={index} className='border border-secondary/60 py-1 px-5 mx-1 my-1 rounded-full text-base font-main'>{ item.name }</span>
                            ))}
                        </div>
                        <hr className='border border-secondary'/>
                    </div>
                    <div className='w-full'></div>
                </div>
            </div>
        </section>
    )
}