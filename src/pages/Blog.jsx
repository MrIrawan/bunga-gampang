import { categories } from '../../public/categories.js'
import CategoriesBar from '../components/ui/CategoriesBar.jsx'

export default function Blog() {
    return (
        <section className='w-full pt-3 pb-3'>
            <div className="container w-full mx-auto">
                <div className='w-full flex flex-col gap-6'>
                    <CategoriesBar data={categories} />
                </div>
            </div>
        </section>
    )
}