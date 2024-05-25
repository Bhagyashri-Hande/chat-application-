import React from 'react';
import axios from 'axios';

const Api = () => {
  return <div>Api</div>;
};

const addUser = async (data) => {
  try {
    await axios.post("http://localhost:8000/reg", data);
  } catch (error) {
    console.log("Error while adding user:", error.message);
    throw error; 
  }
};

const getUser = async () => {
  try {
    const res = await axios.get("http://localhost:8000/register");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Error while calling getUser API:", error.message);
    throw error; 
  }
};
const setConversation=async(data)=>
{
  try {
    await axios.post("http://localhost:8000/conversation",data)
  } catch (error) {
    console.log("Error while calling setConversation API:", error.message);
    throw error;
  }
}
const getConversation=async(data)=>
{
  try {
    const res=await axios.post("http://localhost:8000/get",data)
    return res.data;
  } catch (error) {
    console.log("Error while calling getConversation API:", error.message);
    
  }
}
const newmessage=async(data)=>
{
  try {
    const res=await axios.post("http://localhost:8000/msg",data)
    return res.data
  } catch (error) {
    console.log("new message error while calling newmessage api",error.message)
  }
}
const getmessages=async(id)=>
{
  try {
    const res=await axios.get(`http://localhost:8000/msg/get/${id}`); 
    return res.data.messages;
  } catch (error) 
  { 
    console.log("new message error while calling getmessage api",error.message);
  return [];
  }
 
}

export { Api, getUser, addUser ,setConversation,getConversation,newmessage,getmessages};
