import { Box, Drawer } from '@mui/material'
import { useState, useEffect} from 'react'
import React from 'react'
import '../settings/Settings.css';
import img from '../Profile/dp.jpg'
import { IoMdNotifications } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineWallpaper } from "react-icons/md";
import { TbHelpCircleFilled } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
// import { MdModeEdit } from "react-icons/md";
const Settings = () => {
    const [open,setopen]=useState(true)
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
        left:"28px",
        top:"30px", 
        height:"88vh",
        width:"31%",
        boxShadow:"none",
        "@media (max-width: 768px)": {
          width: "85%", 
        }
    }

    const headerBox=
  {
    // height:"100vh",
    // backgroundColor:"#DCDCDC",
    paddingBottom:"30px",
    height:"88vh",
    '@media (max-width: 768px)': {
      height: "auto", 
    }
  }
  return (
    <div>
        <Drawer
        open={open}
        onClose={()=>setopen(false)}
        PaperProps={{sx:drawerstyle}}
        hideBackdrop={true}
        style={{zIndex:1500}}
        >

         <Box style={headerBox}>
            <div className="settings-heading">
            <i class="fa-solid fa-arrow-left" style={{marginLeft:"20px"}} onClick={()=>setopen(false)}></i>
            <p style={{marginTop:"20px"}}>Settings</p>
            </div>

            {/* <div className="header1"> */}
          <div className="header-search1">
          <div className="search1-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>  
        <input type="text" className='search1' placeholder='Search or start new chat' /> 
    </div> 

    <div className="profile-picture1">
        <img src={img} width={"100px"} height={"100px"} style={{borderRadius: "50%",marginLeft:"15px"}} alt=''/>

        <div className="input-container">
        <input type="text" value={change}  style={{width: "100%", marginTop:"17px", gap:"10px", border:"none",textAlign:"center"}} onChange={handlechange} />
        {/* <MdModeEdit onChange={handlechange}/> */}
        <input type="text" value={dataabout}   style={{ width: "100%", border:"none",textAlign:"center"}} onChange={handlechange1} />
        </div>
       
       </div>

       <div className="setting-icon">
       <IoMdNotifications style={{ fontSize: "23px",marginTop:"15px"}}/>
       <p style={{marginTop:"15px",marginLeft:"15px"}}>Notifications <hr style={{width:"400px"}} className='custom-hr'/></p>
       
       </div>

       <div className="setting-icon">
       <MdLock style={{ fontSize: "23px"}}/>
       <p style={{marginLeft:"15px"}}>Privacy <hr style={{width:"400px"}}/></p>
       </div>

       <div className="setting-icon">
       <MdOutlineSecurity style={{ fontSize: "23px"}}/>
       <p style={{marginLeft:"15px"}}>Security <hr style={{width:"400px"}}/></p>
       </div>
       
       <div className="setting-icon">
       <MdOutlineWallpaper style={{ fontSize: "23px"}}/>
       <p style={{marginLeft:"15px"}}>Chat Wallpaper <hr style={{width:"400px"}}/></p>
       </div>

       <div className="setting-icon">
       <TbHelpCircleFilled style={{ fontSize: "23px"}}/>
       <p style={{marginLeft:"15px"}}>Help <hr style={{width:"400px"}}/></p>
       </div>

       <div className="setting-icon">
       <IoIosLogOut style={{ fontSize: "23px",color:"red"}}/>
       <p style={{marginLeft:"15px",color:"red"}}>Log Out<hr style={{width:"400px",color:"none"}}/></p>
       </div>
       
         </Box>
        </Drawer>
    </div>
  )
}

export default Settings