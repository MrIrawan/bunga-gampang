import { useState } from "react";

export default function UploadBlog() {

    const [previewImage, setPreviewImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    };

    return (
        <main className="pt-16 pb-16 flex items-center justify-center">
            <div className="container border h-[800px] w-full mx-auto lg:w-[800px]">
                <form className="w-full h-full p-5 flex flex-col gap-5">
                    <div className="w-full border h-2/5 overflow-hidden relative">
                        <input 
                            type="file"
                            name="blog_image"
                            id="blog_image"
                            className="absolute inset-0 opacity-0 cursor-pointer z-10"
                            onChange={handleImageChange}
                        />
                        { previewImage ? (
                            <img src={previewImage} alt="" className="w-full h-full object-cover" />
                        ) : (
                            <span className="absolute inset-0 flex items-center justify-center text-gray-500">No image selected</span>
                        )
                        }
                        
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="blog_title" className="text-base font-main font-semibold text-secondary">Judul Artikel:</label>
                        <input 
                            type="text"
                            name="blog_title"
                            id="blog_title"
                            className="border rounded-md px-2 py-2 font-main font-semibold"
                            placeholder="Kabar Indonesia Pagi ini."
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="blog_description" className="text-base font-main font-semibold text-secondary">Judul Artikel:</label>
                        <textarea 
                            name="blog_description"
                            id="blog-description"
                            className="border rounded-md px-2 py-2 min-h-[200px] resize-y max-h-[250px] font-main font-semibold"
                            placeholder="cuaca kota jakarta hari ini"
                        ></textarea>
                    </div>
                    <div className="w-full mt-auto">
                        <button type="submit" className="px-3 py-2 w-4/12 bg-primary rounded-lg text-text capitalize font-mainLight font-semibold text-sm leading-relaxed transition-colors duration-300 ease-out hover:bg-primary/90">Upload Artikel</button>
                    </div>
                </form>
            </div>
        </main>
    );
}