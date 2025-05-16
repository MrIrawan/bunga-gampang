import { useState } from "react"

export default function CategoriesBar({ data }) {

    const [selected, setSelected] = useState(null);

    const handleCategoriesClikcked = (categoryID) => {
        setSelected(categoryID);
        
        console.log(`kategori saat ini : ${data[categoryID].name}`);
        
    }

    return (
        <>
                <div className='w-full p-3 lg:w-fit'>
                    <h2 className='text-2xl font-mainBold mx-1'>browse by categories</h2>
                    <div className='w-full mt-4 mb-6 flex flex-wrap lg:w-fit lg:h-screen'>
                        { data.map((item, index) => {
                            const isSelected = selected === index;

                            return (
                                <span 
                                    key={index} 
                                    onClick={() => handleCategoriesClikcked(index)} 
                                    className={`border py-1 px-5 mx-1 my-1 rounded-full h-fit text-base font-main cursor-pointer transition-all duration-200 ease-in-out ${isSelected ? 'bg-primary text-text border-primary' : 'border-secondary/60'}`}
                                >
                                    { item.name }
                                </span>
                            )
                        }) }
                    </div>
                    <hr className='border border-secondary'/>
                </div>
        </>
    )
}