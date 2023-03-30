
import ErrorImag from '../assets/error.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
    const useNavi = useNavigate()

    return <div className=" h-screen w-full flex flex-col items-center justify-items-start">
        <img src={ErrorImag} alt="error" className=' max-w-[70%]' />
        <h1 className=' bg-gray-400 p-6 hover:bg-darkblue  hover:text-white rounded-lg' onClick={() => { useNavi(-1) }}>Go Back </h1>
    </div>
}