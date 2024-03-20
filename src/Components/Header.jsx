import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
         <Navbar className="bg-info fw-bolder">
        <Container>
          <Navbar.Brand  className='text-light'>
         <Link to={'/'} style={{textDecoration:'none',color:'white'}} >
         <i class="fa-solid fa-photo-film me-2"></i>
            Media-Player
         </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header