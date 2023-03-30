import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form'
import { useQueries, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as api from '../../apis/index'
import {login} from '../../apis/index'

export default function SignUp(){
    const useNavi = useNavigate();
    const [wrong, setWrong] = useState(false)
    const {register, formState:{errors}, handleSubmit } = useForm();
    // const {data,} = useQuery(['login'], {retry:false})

    async function sub(data: any){
       const userData = await api.login(data)
       console.log(userData,"dara");
       
       if (userData) {
        setWrong(false)
        useNavi('/ms2')
        localStorage.setItem('user', JSON.stringify(userData.result))
        localStorage.setItem('token', JSON.stringify(userData.token.access.accessToken))
       } else {
        setWrong(true)
        setTimeout(()=>{
            setWrong(false)
        }, 1500)
       }
    }

    useEffect(()=>{
        const data = localStorage.getItem('token');
        if (data) {
            useNavi('/ms2')
        }
    })

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign in
                </h1>
                {wrong && <p className=' text-red-500'>Wrong credntial</p>}
                <form className="mt-6" onSubmit={handleSubmit(sub)} >
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input placeholder='email' {...register("email",{required:true  }) }
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                       <div className=' text-red-500 mt-1'>   
                        {errors.email?.type === 'required' && 'Email is Required'}
                        {/* {errors.email?.type === 'pattern' && 'Email only taken'} */}
                       </div>
                    </div>
                    <div className="mb-2">
                        <label
                         
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input placeholder='confirm password' 
                        {...register('password',{required:true}) }
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        <div className=' text-red-500 mt-1'>   
                        {errors.password?.type === 'required' && 'password is Required'}
                        
                       </div>
                    </div>
                    
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        onClick={() => (useNavi('signup'))}
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}