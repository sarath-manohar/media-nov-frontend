import React, { useState } from 'react'
import {  Card, Modal } from 'react-bootstrap'
import { addVideoHistoryAPI, deleteVideoAPI } from '../services/allAPI';

function VideoCard({video,setDeleteVideoResponse,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
  // generate data to watchHistory
  const {caption,link}=video
  let today = new Date()
  let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',
  minute:'2-digit',second:'2-digit'}).format(today)
  let videoHistory = {caption,link,timeStamp}
  // make api call
   await  addVideoHistoryAPI (videoHistory)
  
  }

  const removeVideo =async(id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

const dragStarted =(e,id)=>{
  console.log("drag started...Video Id:"+id);
  e.dataTransfer.setData("videoId",id)
}


  return (
    <>
       <Card style={{ width:'16rem' }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img onClick={handleShow} height={'300px'} variant="top" src={video?.url} />
      <Card.Body >
        <Card.Title className='d-flex justify-content-between align-items-center'>
           <h6>{video?.caption}</h6>
          {insideCategory?null:<button className='btn ' onClick={()=>removeVideo(video?.id)}><i class="fa-solid fa-trash text-danger"></i></button>}
          </Card.Title>
        
      </Card.Body>
    </Card> 
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='w-100' width="935" height="526" src={`${video?.link}?autoplay=1`} title={video?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        </Modal.Body>
      
      </Modal>



    </>
  )
}

export default VideoCard