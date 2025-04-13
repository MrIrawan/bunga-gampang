import Section from '../components/Section'
import { categories } from '../../public/categories.js'

export default function Blog() {
    return (
        <Section classname='flex justify-between items-center'>
            <div className='h-screen w-full border-r border-r-secondary'></div>
            <div className='h-screen w-1/2 px-8 border-l border-l-secondary'>
                <div className='w-full flex flex-col items-center gap-8'>
                    <h2 className='text-xl font-mainBold lg:text-3xl'>Browse All Categories</h2>
                    <div className='flex flex-wrap gap-2 w-fit'>
                        { categories.map((data, index) => (
                            <span key={index} className='border border-secondary/70 rounded-full py-1 px-4 text-base font-main text-primary'>{ data.name }</span>
                        )) }
                    </div>
                </div>
            </div>
        </Section>
    )
}