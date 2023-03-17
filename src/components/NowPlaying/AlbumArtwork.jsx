const AlbumArtwork = (props) => {
  const { albumArtwork } = props;

  return (
    <>
      <img
        style={{ width: "15rem", borderRadius: "5%" }}
        src={albumArtwork}
        alt="Album Artwork"
      />
    </>
  );
};

export default AlbumArtwork;
