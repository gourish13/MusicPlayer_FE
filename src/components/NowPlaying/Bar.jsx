const Bar = (props) => {
  const { songPlaytime, songDuration } = props;

  return (
    <>
      <div className="mx-8 py-4">
        <div className="flex justify-between text-sm text-grey-darker">
          <p>{songPlaytime}</p>
          <p>{songDuration}</p>
        </div>
        <div className="mt-1">
          <div className="h-1 bg-slate-400 rounded-full">
            <div className="w-1/5 h-1 bg-red-300 rounded-full relative">
              <span className="w-4 h-4 bg-red-300 absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bar;
