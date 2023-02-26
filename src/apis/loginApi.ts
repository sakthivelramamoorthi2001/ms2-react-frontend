import axios from 'axios' 

const base = axios.create({
    baseURL : 'http://localhost:7000/auth'
})

 export const login =  async (data:any) => {    
    try {
        const result = await base.post('/signin', data)
        console.log(result.data,"api")
        return result.data ? result.data : false
    } catch (error) {
        console.log(error);     
    }
}


