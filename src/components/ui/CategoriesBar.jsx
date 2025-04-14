import { useState } from "react"

export default function CategoriesBar({ data }) {

    const [selected, setSelected] = useState([]);

    const handleCategoriesClikcked = (categoryID) => {
        setSelected(categoryID);
        
        console.log(selected);
        
    }

    return (
        <>
            <div className="w-full flex flex-col gap-6">
                <div className='w-full p-3'>
                    <h2 className='text-2xl font-mainBold mx-1'>browse by categories</h2>
                    <div className='w-full mt-4 mb-6 flex flex-wrap lg:w-1/2'>
                        { data.map((item, index) => (
                            <span key={index} onClick={() => handleCategoriesClikcked(index)} className='border border-secondary/60 py-1 px-5 mx-1 my-1 rounded-full text-base font-main cursor-pointer'>{ item.name }</span>
                        ))}
                    </div>
                    <hr className='border border-secondary'/>
                </div>
            </div>
        </>
    )
}