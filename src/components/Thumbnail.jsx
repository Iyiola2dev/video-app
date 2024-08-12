const Thumbnail = ({ video }) => {
  return (
    <div>
      <video
        className="w-36 h-20 md:h-30 md:w-80 rounded-lg object-cover"
        src={video?.url}
        controls
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default Thumbnail;
