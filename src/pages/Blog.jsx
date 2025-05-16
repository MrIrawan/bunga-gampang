import { categories } from '../../public/categories.js'
import CategoriesBar from '../components/ui/CategoriesBar.jsx'
import PostSection from '../components/PostSection.jsx'
import { articles } from "/public/articles.js"
import BlogNavbar from '../components/layout/BlogNavbar.jsx'

export default function Blog() {
    return (
        <>
        <BlogNavbar />
        <section className='w-full pt-3 pb-3'>
            <div className="container w-full mx-auto lg:flex">
                <div className='w-full flex flex-col gap-6 lg:order-1'>
                    <CategoriesBar data={categories} />
                </div>
                <div className="w-full py-1">
                    <PostSection title="latest post" data={articles}/>
                </div>
            </div>
        </section>
        </>
    )
}