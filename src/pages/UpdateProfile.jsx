export default function UpdateProfile() {
    return (
        <section className="w-full pt-16 pb-16">
            <div className="container w-full mx-auto">
                <form className="w-full flex gap-6" encType="multipart/form-data">
                    <input type="file" name="profile_photo" id="profile_photo" className="w-40 h-40 rounded-full border border-secondary/30 overflow-hidden lg:w-36 lg:h-36"/>
                    <div className="w-1/2 flex flex-col gap-6">
                        <div className="w-full">
                            <label htmlFor="name" className="text-sm font-main font-semibold text-secondary">Profile Name</label>
                            <input
                                type="text" 
                                name="username" 
                                id="username" 
                                className="w-full block mt-1.5 border border-secondary/30 py-2 px-2 font-main rounded-md focus:outline-none focus:border-primary"
                                placeholder="Jane Doe | Copywritter"
                            />
                        </div>
                        <div className="w-full mb-8">
                            <label htmlFor="profile_bio" className="text-sm font-main font-semibold text-secondary">Profile Bio</label>
                            <textarea 
                                name="user_bio" 
                                id="user_bio" 
                                className="w-full block mt-1.5 border rounded-md min-h-[100px] p-2 resize-y max-h-[200px] font-main focus:outline-none focus:border-primary"
                                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eveniet!"
                            >
                            </textarea>
                        </div>
                        <div className="w-full">
                            <button type="submit" className="w-full mb-3 bg-primary text-text font-main text-base py-1.5 rounded-md">Save Change</button>
                            <p className="text-sm font-main font-semibold text-secondary">
                                <span className="font-mainBold">Note: {" "}</span>
                                your email and password cannot be changed here, please select "Changed My Details" menu on your profile.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}