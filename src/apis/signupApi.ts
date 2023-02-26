import axios from 'axios'

const base = axios.create({
    baseURL: 'http://localhost:7000/auth'
})

export const signUp = async (data: any) => {
    try {
        const result = await base.post('/signup', data)
        return result.data ? result.data : false
    } catch (error) {
        console.log(error);
    }
}


