import MusicCard from "./MusicCard";
import MusicCardsLoader from "./MusicCardsLoader";

export default function MusicContainer({ songs }) {

    if (songs === undefined)
        return (<MusicCardsLoader />);

    if (songs.length === 0)
        return (
            <div className="min-w-full min-h-full flex align-center justify-center">
                <p className="text-2xl font-semibold self-center">
                    Nothing to show here.
                </p>
            </div>
        )

    return (
        <div className={containerClasses}>
            {songs.map((song, index) => {
                return <MusicCard key={index}
                    name={song.name} src={song.src} />
            })}
        </div>
    )
}

const containerClasses = "max-w-full max-h-full grid justify-evenly gap-x-6 " +
    "grid-cols-[repeat(auto-fill,_16.5rem)] overflow-scroll scrollbar-hide";

export { containerClasses };
