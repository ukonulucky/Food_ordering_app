import axios from "axios"


const axiosConnect = new axios.create({
    baseURL:"http://localhost:8000"
})

export default  axiosConnect