import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'

function WatchHistory() {
const [history,setHistory]= useState([])

useEffect(()=>{
  getHistory()
},[])
const getHistory = async ()=>{
   const result = await getHistoryAPI()
   if(result.status==200){
    setHistory(result.data)
   }else{
    console.log("api failed");
    console.log(result.message);
   }
}

const removeHistory = async (id)=>{
  await deleteHistoryAPI(id)
  getHistory()
}



  return (
    <>
 <div className="container mt-5 mb-5 d-flex justify-content-between"> 
 <h2>Watch History</h2>
 <Link style={{textDecoration:'none',color:'blueviolet'}} to={'/home'}><i class="fa-solid fa-arrow-left fa-beat-fade ms-2"></i> Back to Home</Link>
  </div>
  <table className='table mb-5 container shadow w-100'>
  <thead>
    <tr>
      <th>#</th>
      <th>Caption</th>
      <th>URL</th>
      <th>Time Stamp</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      history?.length>0?history?.map((video,index)=>(
<tr>
      <td>{index+1}</td>
      <td>{video?.caption}</td>
      <td><a href={video?.link} target='_blank'>{video?.link}</a></td>
      <td>{video?.timeStamp}</td>
      <td><button className='btn' onClick={()=>removeHistory(video?.id)}><i class="fa-solid fa-trash text-danger"></i></button></td>
    </tr>
      )): <p className='text-danger fw-bolder'>History Empty</p>
      }
  </tbody>
  </table>



    </>
  )
}

export default WatchHistory