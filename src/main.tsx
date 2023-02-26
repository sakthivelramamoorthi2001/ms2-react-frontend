import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import axios from 'axios'


axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config
}, error => Promise.reject(error))

axios.interceptors.response.use(Response => { return Response })

const query: any = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={query}>
        <BrowserRouter >
            <App />
            <ReactQueryDevtools initialIsOpen={true} />
        </BrowserRouter>

    </QueryClientProvider>
)
