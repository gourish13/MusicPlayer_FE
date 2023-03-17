const Details = (props) => {
  const { trackListNumber, songName, songArtist, nameAlbumPlaylist } = props;

  return (
    <>
      <h3>
        {trackListNumber}. {songName}
      </h3>
      <h5>{songArtist}</h5>
      <h5>{nameAlbumPlaylist}</h5>
    </>
  );
};

export default Details;
