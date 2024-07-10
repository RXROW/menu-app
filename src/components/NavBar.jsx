import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 

function NavBar({filterBySearch}) {
const [searchValue , setSearchValue ] =useState("");
const onSearch =()=>{
filterBySearch(searchValue)
setSearchValue("")
}

  return (

    <Navbar expand="lg" bg='dark' className=" ">
      <Container  > 
        <Navbar.Brand href="#"> 
          <h4 className='brand-color'> مطعم جديد   </h4> </Navbar.Brand>
        <Navbar.Toggle className='bg-warning' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
       
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder=" ابحث "
              className="mx-2"
              onChange={(e)=>setSearchValue(e.target.value)}
              value={searchValue}
  
            />
            <Button onClick={()=>onSearch()} variant="outline-warning">بحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;