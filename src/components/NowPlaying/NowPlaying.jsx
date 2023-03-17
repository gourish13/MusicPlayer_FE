import AlbumArtwork from "./AlbumArtwork";
import Bar from "./Bar";
import Buttons from "./Buttons";
import Details from "./Details";

const NowPlaying = (song) => {
  const {
    trackListNumber,
    songName,
    songArtist,
    albumArtwork,
    nameAlbumPlaylist,
    songDuration,
    songPlaytime,
  } = song;

  return (
    <>
      <div className="p-10 flex">
        <div className="w-1/2">
          <AlbumArtwork albumArtwork={albumArtwork} />
        </div>
        <div className="w-1/2">
          <Details
            trackListNumber={trackListNumber}
            songName={songName}
            songArtist={songArtist}
            nameAlbumPlaylist={nameAlbumPlaylist}
          />
          <Buttons />
          <Bar songPlaytime={songPlaytime} songDuration={songDuration} />
        </div>
      </div>
    </>
  );
};

export default NowPlaying;
