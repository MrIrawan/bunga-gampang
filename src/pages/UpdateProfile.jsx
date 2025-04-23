import { useState } from 'react';
import { getTokenFromLocalStorage } from '../services/tokenServices.js';

export default function UpdateProfile() {
    const [previewImage, setPreviewImage] = useState(null);
    const [formUpdate, setFormUpdate] = useState({
        username: '',
        user_bio: '',
        profile_photo: null,
    });

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
            setFormUpdate({ ...formUpdate, profile_photo: file });
        }
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('username', formUpdate.username);
        formData.append('user_bio', formUpdate.user_bio);
        if (formUpdate.profile_photo) {
            formData.append('profile_photo', formUpdate.profile_photo);
        }

        try {
            const response = await fetch('http://localhost:8800/api/update/profile', {
                method: 'PUT',
                headers: {
                    "Authorization": `Bearer ${getTokenFromLocalStorage()}`
                },
                
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData);
            
        } catch (error) {
            console.error(error);
        }
        
    };

    return (
        <section className="w-full pt-16 pb-16">
            <div className="container w-full mx-auto">
                <form className="w-full flex gap-6" onSubmit={(e) => handleUpdateProfile(e)} encType="multipart/form-data">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border border-secondary/30 lg:w-36 lg:h-36">
                        <input 
                            type="file" 
                            name="profile_photo" 
                            id="profile_photo" 
                            className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                            onChange={handleImageChange}
                        />
                        {previewImage ? (
                            <img 
                                src={previewImage} 
                                alt="Preview" 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-base font-semibold font-main text-secondary">
                                pilih foto
                            </div>
                        )}
                    </div>
                    <div className="w-1/2 flex flex-col gap-6">
                        <div className="w-full">
                            <label htmlFor="username" className="text-sm font-main font-semibold text-secondary">Profile Name</label>
                            <input
                                type="text" 
                                name="username" 
                                id="username" 
                                className="w-full block mt-1.5 border border-secondary/30 py-2 px-2 font-main rounded-md focus:outline-none focus:border-primary"
                                placeholder="Jane Doe | Copywriter"
                                onChange={(e) => setFormUpdate({ ...formUpdate, username: e.target.value })}
                            />
                        </div>
                        <div className="w-full mb-8">
                            <label htmlFor="user_bio" className="text-sm font-main font-semibold text-secondary">Profile Bio</label>
                            <textarea 
                                name="user_bio" 
                                id="user_bio" 
                                className="w-full block mt-1.5 border rounded-md min-h-[100px] p-2 resize-y max-h-[200px] font-main focus:outline-none focus:border-primary"
                                placeholder="Ceritakan tentang kamu di sini..."
                                onChange={(e) => setFormUpdate({ ...formUpdate, user_bio: e.target.value })}
                            />
                        </div>
                        <div className="w-full">
                            <button type="submit" className="w-full mb-3 bg-primary text-text font-main text-base py-1.5 rounded-md">
                                Save Change
                            </button>
                            <p className="text-sm font-main font-semibold text-secondary">
                                <span className="font-mainBold">Note: {" "}</span>
                                email dan password tidak bisa diubah di sini, silakan pilih menu “Changed My Details”.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}