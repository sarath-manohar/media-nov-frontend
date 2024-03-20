


import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"

// upload new video
export const uploadVideoAPI = async (video)=>{
 return await  commonAPI ("POST",`${SERVER_URL}/allvideos`,video)
}

// getall uploaded videos
export const getAllUploadedVideosAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/allvideos`, "");
};




// add video to watchhistory
export const addVideoHistoryAPI = async (video)=>{
    return await  commonAPI ("POST",`${SERVER_URL}/history`,video)
   }

   // get  watchhistory
export const getHistoryAPI = async ()=>{
    return await  commonAPI ("GET",`${SERVER_URL}/history`,"")
   }

      // delete  history
export const deleteHistoryAPI = async (id)=>{
    return await  commonAPI ("DELETE",`${SERVER_URL}/history/${id}`,{})
   }

   
      // delete  history
export const deleteVideoAPI = async (id)=>{
    return await  commonAPI ("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
   }

// add video to categories
export const addCategoryAPI = async (category)=>{
    return await  commonAPI ("POST",`${SERVER_URL}/category`,category)
   }

   // get all video to categories
export const getAllCategoryAPI = async ()=>{
    return await  commonAPI ("GET",`${SERVER_URL}/category`,"")
   }

//    delete category 

export const removeCategoryAPI =async(id)=>{
    return await  commonAPI ("DELETE",`${SERVER_URL}/category/${id}`,{})
}

// update video to category

export const updateCategoryAPI = async(id,categoryDetails)=>{
    return await  commonAPI ("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}
// get a video 
export const getAVideoAPI = async(id)=>{
    return await  commonAPI ("GET",`${SERVER_URL}/allvideos/${id}`,"")
}

