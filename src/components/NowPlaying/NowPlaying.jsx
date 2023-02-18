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
      <AlbumArtwork albumArtwork={albumArtwork} />
      <Details
        trackListNumber={trackListNumber}
        songName={songName}
        songArtist={songArtist}
        nameAlbumPlaylist={nameAlbumPlaylist}
      />
      <Buttons />
      <Bar songPlaytime={songPlaytime} songDuration={songDuration} />
    </>
  );
};

export default NowPlaying;
