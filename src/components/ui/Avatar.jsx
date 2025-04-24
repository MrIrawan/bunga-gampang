export default function Avatar({ 
    src, 
    alt, 
    avatarSize = 'default' 
}) {

    const avatarSizes = [
        {size: "default", width: "w-12", height: "h-12"},
        {size: "sm", width: "w-8", height: "h-8"},
        {size: "xl", width: "w-40", height: "h-40"},
    ];

    const avatarSizeHandler = () => {
        const size = avatarSizes.find((size) => size.size === avatarSize);
        return size;
    }

    return (
        <div className={`${avatarSizeHandler().width} ${avatarSizeHandler().height} rounded-full overflow-hidden`}>
            <img src={src} alt={alt} className="w-full h-full object-cover"/>
        </div>
    )
}