import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'
function Home() {
  const [dropResponse,setDropResponse]=useState({})
  const [uploadVideoResponse,setUploadVideoResponse]=useState([])
  return (
    <>

    <div className="container mt-5 mb-5 d-flex justify-content-between">
      <div className="add-videos">
      <Add setUploadVideoResponse={setUploadVideoResponse} />
      </div>
      <Link to={'/watchhistory'} style={{textDecoration:'none',color:"white"}}>
        Watch History <i class="fa-solid fa-arrow-right"></i>
      </Link>
    </div>

    <div className="container-fluid w-100 mt-5 mb-5 row">

      <div className="all-videos col-lg-9">
        <h2>All-Videos</h2>
        <View uploadVideoResponse={uploadVideoResponse} setDropResponse={setDropResponse}/>
      </div>
      <div className="category  col-lg-3">
        <Category dropResponse={dropResponse} />
      </div>

    </div>
    
    
    
    
    </>
  )
}

export default Home