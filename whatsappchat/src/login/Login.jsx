import { Dialog } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../context/Accountcontext'
import { GoogleLogin } from '@react-oauth/google'
import { qrCodeImage } from '../content/data'
import {jwtDecode} from 'jwt-decode';
import './login.css'
import {Api} from '../service/Api'
const Login = () => {
    
    const dialogstyle=
    {
        height:"95%",
        width:"60%",
        maxWidth:"100%",
        maxHeight:"100%",
        marginTop:"12%",
        boxShadow:"none",
        // overflow:"hidden",

        "@media (max-width: 768px)":
        {
            height:"90%",
            marginTop:"22%",
            width:"88%",
        }
    }
    const {setaccount}=useContext(AccountContext)
 const onLoginSuccess=async(res)=>
 {
    const decode = jwtDecode(res.credential);
    console.log(decode);
    setaccount(decode)
    await Api(decode)
 }
 const onLoginError=(res)=>
 {
       console.log("login failed:",res);
 }
  return (
    <div>
        <Dialog 
        open={true}
        PaperProps={{sx:dialogstyle}}
        hideBackdrop={true}
        >
         
                <div className="login-info">
                <div className="login-data">
                <p style={{fontSize:"28px"}}>To use Chattiee on Your Computer :</p>
                <ol style={{lineHeight:"50px"}}>
                    <li>
                        open ChatApp on Your Phone
                    </li>

                    <li>Tap <b>Menu</b> <span>&#8942;</span> on Android, or <b>Setting</b> <span>&#9881;</span> on iPhone</li>

                    <li>Tap <b>Linked devices</b> and then <b>Link a device</b></li>

                    <li>Point your phone at this screen to capture QR code</li>
                        
                </ol>
                </div>

                <div className="qr" style={{position:"relative"}}>
                <img src={qrCodeImage} alt='qr code' height={240} width={240} ></img>

         <div className='event'>
             <GoogleLogin 
            onSuccess={onLoginSuccess}
            onError={onLoginError}
            />
          </div>

                </div> 
                </div>


                
        </Dialog>
    </div>
  )
}

export default Login