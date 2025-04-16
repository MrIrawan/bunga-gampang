import ArticlesCard from "./ui/ArticlesCard";

export default function PostSection({ title, data }) {
    return (
        <div id={title} className='w-full p-3'>
            <h2 className='text-2xl mb-3 font-mainBold leading-relaxed capitalize'>{ title }</h2>
            <div className='w-full flex flex-wrap gap-6'>
                { data.map((article, index) => (
                    <ArticlesCard data={article} key={index}/>
                )) }
            </div>
        </div>
    )
}