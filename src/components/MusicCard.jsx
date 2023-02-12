const MusicCard = prop => {
    return (
        <div className={songDivClasses}>
            <img src={prop.src} alt={prop.name} title={prop.name}
                className={coverImgClasses}
            />
            <p className={pClasses} title={prop.name}>
                {prop.name.length > LIMIT ?
                    prop.name.substring(0, LIMIT + 1) + " ..." : prop.name}
            </p>
        </div>
    )
}

const LIMIT = 45;

const songDivClasses = "flex flex-col m-4 mb-8 h-60 w-60";

const coverImgClasses = "w-full h-[90%]";

const pClasses = "text-xl font-medium h-[10%]";

export { songDivClasses, coverImgClasses };
export default MusicCard;