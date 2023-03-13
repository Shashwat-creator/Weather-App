import React from 'react'
import { useState } from 'react';
import {Box,InputBase,Button} from '@mui/material'
import { getWeather } from '../services/api';
const Form = ({setResult}) => {
    const [data, setData] = useState({city:'',country:''});
    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value})

    }
    const getWeatherInfo=async()=>{
        const response=await getWeather(data.city,data.country)
        console.log(response)
        setResult(response)
      
        
        
    }
  return (
    <Box sx={{background:'#445A6F', padding:0.5}}>
    <InputBase placeholder='City' name='city' onChange={(e)=>handleChange(e)} sx={{color: 'white',marginRight:'2',fontSize:'18'}}/>
    <InputBase placeholder='Country' name='country' onChange={(e)=>handleChange(e)} sx={{color: 'white',marginRight:'2',fontSize:'18'}}/>
    <Button variant='contained' onClick={()=>getWeatherInfo()} sx={{background:'#e67e22'}}>Get Weather</Button>
    </Box> 
  )
}

export default Form