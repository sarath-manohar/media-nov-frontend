import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, getAVideoAPI, getAllCategoryAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';

function Category({dropResponse}) {
  const [allCategories,setAllCategories]=useState([])
  const [categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

useEffect(()=>{
  getAllCategories()
},[dropResponse])

const getAllCategories = async ()=>{
  const {data} = await getAllCategoryAPI()
  setAllCategories(data)
}




const handleAdd = async ()=>{
  if(categoryName){
    const result = await addCategoryAPI({categoryName,allVideos:[]})
    if(result.status>=200 && result.status<300){
      handleClose()
      getAllCategories()
    }else{
      alert(result.message)
    }  

  }else{
    alert('please fill the form')
  }
}

const removeCategory= async (id)=>{
  await removeCategoryAPI(id)
  getAllCategories()
}
const dragOver =(e)=>{
  console.log("video card dragging over the category");
  e.preventDefault()
}


const videoDrop = async (e,categoryId)=>{
 const videoId =  e.dataTransfer.getData("videoId")
 console.log("video Id:"+videoId+"dropped!! inside the category"+categoryId);
 const {data} = await getAVideoAPI(videoId)
//  console.log(data);
const selectedCategory = allCategories.find(item=>item.id===categoryId)
selectedCategory.allVideos.push(data)
// console.log(selectedCategory);
 await updateCategoryAPI(categoryId,selectedCategory)
 getAllCategories()
}
//  console.log(allCategories);

const videoDragStarted = (e,videoId,categoryId)=>{
  let datashare = {videoId,categoryId}
  e.dataTransfer.setData("data",JSON.stringify(datashare))
}

  return (
    <>
<div className='d-grid'>
<Button className='btn btn-info' onClick={handleShow}>
       Add Category
      </Button>
</div>

{
  allCategories?.length>0?allCategories.map(category=>(
    <div className='border rounded p-3 mt-3' droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)}>
      <div className="d-flex justify-content-between align-items-center">
        <h6>{category?.categoryName}</h6>
        <button className='btn' onClick={()=>removeCategory(category?.id)}><i class="fa-solid fa-trash text-danger"></i></button>
</div>

    <Row>
      {
       category?.allVideos?.length>0?category?.allVideos.map(card=>(
        <Col sm={12} draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
           <VideoCard video={card} insideCategory={true}/>
        </Col>
       )):null
      }
    </Row>
    </div>
  )):<p className='text-danger fs-3'>No Categories added yet...</p>
}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false} centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Fill the Field</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Category Name" onChange={e=>setCategoryName(e.target.value)} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>ADD</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category