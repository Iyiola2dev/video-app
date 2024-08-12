import React from "react";
import videos from "../mockData";
import Video from "./Video";

const count = videos.length;
let heading
if (count > 0) {
  const noun = count >= 1 ? "videos" : "video";
  heading = ` ${count} ${noun}`;
}
const VideoList = ({ videos,  emptyHeading }) => {
  return (
    <div >
      <h2>{heading}</h2>
      <div className="flex flex-col gap-5 mt-2">
        {videos.map((video, index)=>(
            <Video key={index} video={video}/>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
