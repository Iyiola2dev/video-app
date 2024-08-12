

import { GoHeartFill } from "react-icons/go"

const LikeButton = ()=>{

    return(
        <div className=" flex md:w-full justify-end">
           <GoHeartFill className="text-2xl hover:text-[pink] text-[#5c5a5a] cursor-pointer"/>
        </div>
    )
}

export default LikeButton