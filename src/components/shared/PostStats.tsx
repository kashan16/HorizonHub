import { useUserContext } from "@/context/AuthContext";
import { deleteSavedPost, savePost } from "@/lib/appwrite/api";
import { useDeleteSavedPost, useLikePost, useSavePost } from "@/lib/react-query/queries";
import { checkIsLiked } from "@/lib/utils";
import { Models } from "appwrite";
import { useState } from "react";

type PostStatsPorp = {
    post : Models.Document;
    userId : string;
}

const PostStats = ( {post , userId} : PostStatsPorp) => {

    const likesList = post.likes.map((user : Models.Document) => user.$id)

    const [ likes , setLikes ] = useState(likesList);
    const [ isSaved , setIsSaved ] = useState(false);

    const { mutate : likePost } = useLikePost();
    const { mutate : SavePost } = useSavePost();
    const { mutate : DeleteSavePost } = useDeleteSavedPost();
    const { data : currentUser } = useUserContext();

    const handleLikePost = ( e : React.MouseEvent ) => {
        e.stopPropagation();

        let newLikes = [...likes]
        const hasLiked = newLikes.includes(userId);
        if(hasLiked){
            newLikes = newLikes.filter((id) => id !==userId)
        } else {
            newLikes.push(newLikes)
        }

        setLikes(newLikes);
        likePost({ postId : post.$id , likesArray : newLikes })
    }

    const handleSavePost = ( e : React.MouseEvent ) => {
        e.stopPropagation();
        const savedPostRecord = currentUser?.save.find((record : Models.Document) => record.$id === post.$id)
        if(savedPostRecord){
            setIsSaved(false);
            deleteSavedPost(savedPostRecord.$id);
        } else {
            savePost(userId,post.$id);
            setIsSaved(true);
        }

    }


    return (
        <div className="flex justify-between items-center z-20">
            <div className="flex gap-2 mr-5">
                <img
                    src = {checkIsLiked(likes,userId)
                        ? "/assets/icons/liked.svg"
                        : "/assets/icons/like.svg"}
                    alt = "like"
                    width = {20}
                    height = {20}
                    onClick = {handleLikePost}
                    className = "cursor-pointer"/>
                <p className="small-medium lg:base-medium">
                    0
                </p>
            </div>
            <div className="flex gap-2">
                <img
                    src = {isSaved ? 
                        "/assets/icons/saved.svg"
                        : "assets/icons/save.svg"}
                    alt = "save"
                    width = {20}
                    height = {20}
                    onClick = {handleSavePost}
                    className = "cursor-pointer"/>
            </div>
        </div>
    )
}

export default PostStats