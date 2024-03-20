import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ textAlign: "justify" }}>
            Welcome To <span className="text-warning">Media-Player</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            voluptas. Animi deleniti mollitia nesciunt nostrum, aut unde debitis
            modi molestias excepturi, sapiente eos ut aspernatur nihil vitae
            sint porro dolorum?
          </p>
          <Link to={'/home'} className="btn btn-info mt-4">Get Started</Link>
        </Col>
        <Col lg={5}>
          <img
            src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"
            alt=""
          />
        </Col>
        <Col></Col>
      </Row>


<div className="container mb-5 mt-5 d-flex justify-content-center align-items-center flex-column">
  <h3>Features</h3>
  <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
  <Card style={{ width: '22rem' }} className="p-5 bg-info">
      <Card.Img variant="top"  width={'300px'} height={'300px'}  src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title className="text-danger">Managing Videos</Card.Title>
        <Card.Text className="text-dark">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }} className="p-5 bg-info">
      <Card.Img variant="top" width={'300px'} height={'300px'} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title className="text-danger">Watch History</Card.Title>
        <Card.Text className="text-dark">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }} className="p-5 bg-info">
      <Card.Img variant="top"  width={'300px'} height={'300px'}  src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title className="text-danger">Categorized Video</Card.Title>
        <Card.Text className="text-dark">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
  </div>
</div>

<div className="container p-5 border rounded border-light mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
  <div className="col-lg-5">
    <h3 className="text-warning">Simple,Powerful & Fast</h3>
    <h6 className="mb-5"><span className="text-warning fs-5 fw-bolder">Play Everything</span>:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam placeat et voluptatum debitis, praesentium fugiat delectus fugit? Id ab voluptatum fuga beatae, impedit, sunt optio, esse ad inventore illo vero.</h6>

    <h6 className="mb-5"><span className="text-warning fs-5 fw-bolder">Categorize Videos</span>:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam placeat et voluptatum debitis, praesentium fugiat delectus fugit? Id ab voluptatum fuga beatae, impedit, sunt optio, esse ad inventore illo vero.</h6>

    <h6 className="mb-5"><span className="text-warning fs-5 fw-bolder">Managing History</span>:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam placeat et voluptatum debitis, praesentium fugiat delectus fugit? Id ab voluptatum fuga beatae, impedit, sunt optio, esse ad inventore illo vero.</h6>
  </div>
  <div className="col-lg-5">
  <iframe width="100%" height="350" src="https://www.youtube.com/embed/9AizchSQURA" title="Kuthanthram - Manjummel Boys Promo Song | Chidambaram | Sushin Shyam ft. Vedan | Parava Films" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>


</div>

    </>
  );
}

export default LandingPage;
