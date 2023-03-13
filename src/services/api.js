import axios from 'axios'
const API_KEY='2d2d63dc93e9b04210e3227616a1de6c'
const API_URL='http://api.openweathermap.org/data/2.5/weather'
export const  getWeather=async (city,country)=>{
    try{
        const response=await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
        return response.data
    }catch(error){
        console.log("Error occured while fetching data from api "+error.message)
         return null
    }
}