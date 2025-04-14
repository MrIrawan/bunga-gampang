import { categories } from '../../public/categories.js'
import CategoriesBar from '../components/ui/CategoriesBar.jsx'

export default function Blog() {
    return (
        <section className='w-full pt-3 pb-3'>
            <div className="container w-full mx-auto">
                <CategoriesBar data={categories}/>
            </div>
        </section>
    )
}