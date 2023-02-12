import { coverImgClasses, songDivClasses } from "./MusicCard";
import { containerClasses } from "./MusicContainer";

function MusicCardsLoader() {
    return (
        <div className={containerClasses}>
            {new Array(COUNT).fill(0).map((_, idx) => {
                return (
                    <div key={idx} className={songDivClasses + " animate-pulse"}>
                        <div className={coverImgClasses + " bg-slate-300"} />
                        <div className="mt-1 w-full h-8 bg-slate-200"></div>
                    </div>
                )
            })}
        </div>
    )
}

const COUNT = 13;

export default MusicCardsLoader;