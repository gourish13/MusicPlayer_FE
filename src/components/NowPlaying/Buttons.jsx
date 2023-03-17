const Buttons = () => {
  const play = () => {
    var resume = document.getElementById("play-btn");

    var resumeOn = resume.classList.contains("fa-play");

    if (resumeOn) {
      resume.classList.remove("fa-play");
      resume.classList.add("fa-pause");
    } else {
      resume.classList.remove("fa-pause");
      resume.classList.add("fa-play");
    }
  };

  return (
    <>
      <div>Buttons</div>
      <button
        className="w-24 h-24 rounded-full bg-blue-500 focus:outline-none"
        onClick={play}
      >
        <i className="fa fa-play fa-2x text-white" id="play-btn"></i>
      </button>
    </>
  );
};

export default Buttons;
