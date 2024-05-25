// import React, { useState } from 'react'
// import {Container,Row,Col} from 'react-bootstrap'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { HiUserGroup } from "react-icons/hi";
// import { IoDiscOutline } from "react-icons/io5";
// import { BiMessageDots } from "react-icons/bi";
// import { LuMessageSquarePlus } from "react-icons/lu";
// import { HiOutlineDotsVertical } from "react-icons/hi";
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// import { IoFilterOutline } from "react-icons/io5";
// import img from '../icon.png'  
// import { AppBar,Box,Toolbar } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import Conversation from './Conversation';
// // import Profile1 from '../Profile/Profile1';
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';

// const Nav1 = () => {
//   const [opendrawer,setopendrawer]=useState(false);
//   const navigate=useNavigate();
//   // const [setopendrawer]=useState(false)
//   const toggleDrawer=()=>
//   {
//         setopendrawer(true);
//   }
//   const header=
//   {
//     boxShadow:"none",
//     height:"130px",
//     backgroundColor:"#00A884",
//   }
//   const headerBox=
//   {
//     height:"100vh",
//     backgroundColor:"#DCDCDC"
//   }
//   const dialogbox=
//   {
//     height:"88vh",
//     marginTop:"88vh",
//     backgroundColor:"white",
//     boxShadow:"none",
//   }
//   return (
//     <div> 
//       <Box style={headerBox}>
//       <AppBar style={header}>
//         <Toolbar>
          
//           <Container fluid>
//           <div style={dialogbox}>
//         <Row>
       
//             <Col lg={4} md={6} sm={12}>          
//             <Navbar expand="lg" style={{ backgroundColor: "#F0F2F5"}}>

//         <Container>
     
//          <Navbar.Brand onClick={()=>navigate('/Profile')}><img src={img} height={"30px"} alt=""  onClick={()=>toggleDrawer()} /></Navbar.Brand>
        
//             {/* <Profile1 open={opendrawer} setopen={setopendrawer} /> */}
            
       
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">

//             <div className="ms-auto nav">
//           <Nav className="me-auto ">
            
//             <OverlayTrigger
//            placement="bottom"
//            overlay={<Tooltip>communities</Tooltip>}>
//             <Nav.Link href="#home" className="list"><HiUserGroup /></Nav.Link>
//          </OverlayTrigger>

//          <OverlayTrigger
//         placement="bottom"
//           overlay={<Tooltip>status</Tooltip>}>
//           <Nav.Link href="#link" className="list"><IoDiscOutline /></Nav.Link>
//         </OverlayTrigger>

//             <OverlayTrigger
//            placement="bottom"
//            overlay={<Tooltip>channels</Tooltip>} >
//             <Nav.Link href="#link" className="list"><BiMessageDots /></Nav.Link>
//          </OverlayTrigger>

//             <OverlayTrigger
//            placement="bottom"
//            overlay={<Tooltip>new chat</Tooltip>}>
//             <Nav.Link href="#link" className="list"><LuMessageSquarePlus /></Nav.Link>
//          </OverlayTrigger>
            
//             <NavDropdown title= {<HiOutlineDotsVertical />}id="basic-nav-dropdown" className="dropdown " style={{fontSize:"22px"}}>
//               <NavDropdown.Item href="#action/3.1">New group</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 New community
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Starred message</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Select chats</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">
//                <a href="http://localhost:3000/settings" onClick={()=>toggleDrawer()}>Settings</a>
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Log out</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Get WhatsApp for Windows
//               </NavDropdown.Item>
//             </NavDropdown>
            
//           </Nav>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
    
//     {/* header starts */}

//     <div className="header1">
//     <div className="header-search">
//       <div className="search-icon">
//         <i className="fa-solid fa-magnifying-glass"></i>
//         </div>  
//         <input type="text" className='search' placeholder='Search or start new chat' />
       
//     </div>
//     <div className="line-icon">
//     <IoFilterOutline />
//     </div>
//     </div>
    
//             </Col> 
//         </Row>
//         </div>
//       </Container>
          
//         </Toolbar>
//         </AppBar> 
//       </Box>
      
//       <Conversation/>

//     </div>
//   )
// }

// export default Nav1