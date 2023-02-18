const Details = (props) => {
  const { trackListNumber, songName, songArtist, nameAlbumPlaylist } = props;

  return (
    <>
      <div>{trackListNumber}</div>
      <div>{songName}</div>
      <div>{songArtist}</div>
      <div>{nameAlbumPlaylist}</div>
    </>
  );
};

export default Details;
