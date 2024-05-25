import React,{ useState,useEffect} from 'react'
import Drawer from '@mui/material/Drawer';
import '../Profile/Profile1.css'
import {Box } from '@mui/material';
import img from '../Profile/dp.jpg'
const Profile1 = ({open,setopen}) => {
  // const [open,setopen]=useState(true)
  const [change, setchange] = useState("");
const [dataabout, setDataabout] = useState("");

useEffect(() => {
  const savedChange = localStorage.getItem('savedChange');
  const savedDataabout = localStorage.getItem('savedDataabout');

  if (savedChange) {
    setchange(savedChange);
  }
  if (savedDataabout) {
    setDataabout(savedDataabout);
  }
}, []);

const handlechange = (e) => {
  const newValue = e.target.value;
  setchange(newValue);
  localStorage.setItem('savedChange', newValue);
};

const handlechange1 = (e) => {
  const newValue = e.target.value;
  setDataabout(newValue);
  localStorage.setItem('savedDataabout', newValue);
};

  const drawerstyle=
  {
      left:"30px",
      top:"18.5px",
      height:"88%",
      width:"30.8%",
      boxShadow:"none",
      "@media (max-width: 768px)": {
        width: "85%", 
      }
  }
  
  const headerBox=
  {
    // height:"100vh",
    backgroundColor:"#E3E2DD",
    // paddingBottom:"30px",
    height:"100vh",
    '@media (max-width: 768px)': {
      height: "auto", 
    }
  }
  const handleclose=()=>
  {
    setopen(false)
  }
  // const {account} =useContext(AccountContext)
  return (
    <div>
      
        <Drawer
       open={open}
       onClose={handleclose}
       PaperProps={{sx: drawerstyle}}
       hideBackdrop={true}
       style={{zIndex:1500}}
       >
        <Box style={headerBox}>
       <div className='profile-heading'>
       <i class="fa-solid fa-arrow-left" style={{marginLeft:"20px"}} onClick={()=>setopen(false)}></i>
       <p style={{marginTop:"20px"}}>Profile</p>
       </div>
        
       <div className="profile-picture">
        <img src={img} width={"200px"} height={"200px"} style={{borderRadius: "50%"}} alt=''/>
       </div>
      
       <div className="profile-input">
        <div className="input-container">
        <label htmlFor="">Your name</label>
        <input type="text" value={change}  style={{height:"100px", width: "100%", border:"none",textAlign:"center"}} onChange={handlechange} />
        </div>
       
       <p style={{fontSize:"14px",textAlign:"center"}}>This is not your username or pin . This name is visible to your WhatsApp contacts</p>

       <div className="input-container">
        <label htmlFor="">About</label>
       <input type="text" value={dataabout}   style={{height:"100px", width: "100%", border:"none",textAlign:"center"}} onChange={handlechange1} />
       </div>
       </div>
       </Box>

      
       
       </Drawer>
        
       

    </div>
  )
}

export default Profile1