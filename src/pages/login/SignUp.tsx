import React, { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import * as api from '../../apis/index'

export default function SignUp() {
    const useNavi = useNavigate();
    const [wrong, setWrong] = useState(false)
    const [success, setSuccess] = useState(false)


    const { register, formState: { errors }, handleSubmit } = useForm();
    async function sub(e: any) {
        const userCreate: any = await api.signUp(e)
        console.log(userCreate, "create");

        if (!userCreate == undefined || userCreate) {
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
                useNavi('/')
            }, 2000)
        } else {
            setWrong(true)
            setTimeout(() => {
                setWrong(false)
            }, 2000)
        }
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                    Sign up
                </h1>
                {wrong && <p className=' text-red-500'>Somthing went Wrong try again Later !</p>}
                {success && <p className=' text-purple-700 text-center'>Register Succefully Created !</p>}

                <form className="mt-6" onSubmit={handleSubmit(sub)} >
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input placeholder='Name' {...register("name", { required: true })}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        <div className=' text-red-500 mt-1'>
                            {errors.name?.type === 'required' && 'Name is Required'}
                            {/* {errors.email?.type === 'pattern' && 'Email only taken'} */}
                        </div>
                    </div>
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input placeholder='email' {...register("email", { required: true })}
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
                        <input placeholder='password'
                            {...register('password', { required: true, minLength: 8, maxLength: 16 })}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        <div className=' text-red-500 mt-1'>
                            {errors.password?.type === 'required' && 'password is Required'}
                            {errors.password?.type === 'minLength' && 'minLength must be a 8 char'}
                            {errors.password?.type === 'maxLength' && 'maxLength must be a below 16 char'}

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
                            Lets Create
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have a account?{" "}
                    <a
                        onClick={() => (useNavi('/'))}
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
}