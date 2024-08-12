import LikeButton from "./Likebutton"
import Thumbnail from "./Thumbnail"

const Video = ({video})=>{
    return (
        <div className="flex gap-3 ">
            <Thumbnail video={video} />
            <a href={video.url} className=" flex  flex-col w-fit gap-1 ">
                <h3 className="text-base md:text-lg font-semibold">{video.name}</h3>
                <p className="text-sm md:text-base md:text-gray-600 font-medium">{video.description} </p>
            </a>
            <LikeButton video={video}/>
        </div>
    )
}

export default Video