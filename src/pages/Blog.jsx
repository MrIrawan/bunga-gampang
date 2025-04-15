import { categories } from '../../public/categories.js'
import CategoriesBar from '../components/ui/CategoriesBar.jsx'
import ArticlesCard from '../components/ui/ArticlesCard.jsx'

export default function Blog() {
    return (
        <section className='w-full pt-3 pb-3'>
            <div className="container w-full mx-auto">
                <div className='w-full flex flex-col gap-6'>
                    <CategoriesBar data={categories} />
                </div>
                <div className="w-full py-1">
                    <div id='latest' className='w-full p-3'>
                        <h2 className='text-2xl mb-3 font-mainBold leading-relaxed capitalize'>latest post</h2>
                        <div className='w-full flex flex-wrap'>
                            <ArticlesCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}