import axios from 'axios' 

const base = axios.create({
    baseURL :   'https://ms2-bn4y.onrender.com/v1'
})
// 'http://localhost:8080/v1/' ||
 export const login =  async (data:any) => {    
    try {
        const result = await base.post('/login/', data)
        console.log(result.data,"api")
        return result.data.result ? result.data.result : false
    } catch (error) {
        console.log(error);
    }
}


