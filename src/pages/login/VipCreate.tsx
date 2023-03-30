import React, { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import * as api from '../../apis/index'
import DropDownComponent from '../../pages/component/DropDownComponent'
import { DownOutlined, CheckOutlined } from '@ant-design/icons';
import CardShow from '../../pages/component/CardShow'
import SendMoney from '../../pages/component/SendMony'
export default function VipCreate() {
    const useNavi = useNavigate();
    const [wrong, setWrong] = useState(false)
    const [success, setSuccess] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const items = [
        {
          label: 'You Can Create New Resume',
          key: '1',
          icon: <CheckOutlined />,
        },
        {
          label: 'You Can Create New Template',
          key: '2',
          icon: <CheckOutlined />,
        },
        {
          label: 'You Can Edit Template',
          key: '3',
          icon: <CheckOutlined />,
        },
        {
          label: 'You Can Download Your Resume',
          key: '4',
          icon: <CheckOutlined />,
        },
      ];
      

    
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
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-2xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                    Upgrade to VIP
                </h1>
                {wrong && <p className=' text-red-500'>Somthing went Wrong try again Later !</p>}
                {success && <p className=' text-purple-700 text-center'>Register Succefully Created !</p>}

                <form className="mt-6 [&>div]:mb-5" onSubmit={handleSubmit(sub)} >
                   
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
                        <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    </div>

                   

                    <div className='mb-2'>
                    <label className="block text-sm font-semibold text-gray-800">
                        VIP Plans 
                    </label>

                   <div className=' flex flex-row items-center justify-evenly mt-2'>
                   <CardShow title='Plan - 1' content={["9$","1 Month plan"]} />
                   <CardShow title='Plan - 2' content={["10$","3 Month plan"]} />
                   </div>
                    </div>

                    <div>
                    <label className="block text-sm font-semibold text-gray-800">
                        VIP Features 
                    </label>
                        <ul className='flex flex-col items-start justify-center ml-20'>
                       <li className=' flex flex-row items-center justify-items-center [&>*]:mr-3'>
                       <CheckOutlined className=' text-darkblue font-semibold text-lg' />
                            <h1 className='text-lg'>  You Can Create New Resum</h1>
                        </li>
                        <li className=' flex flex-row items-center justify-items-center [&>*]:mr-3'>
                       <CheckOutlined className=' text-darkblue font-semibold text-lg' />
                            <h1 className='text-lg'>  You Can Create New Template</h1>
                        </li>
                        <li className=' flex flex-row items-center justify-items-center [&>*]:mr-3'>
                       <CheckOutlined className=' text-darkblue font-semibold text-lg' />
                            <h1 className='text-lg'>  You Can Edit Template</h1>
                        </li>
                        <li className=' flex flex-row items-center justify-items-center [&>*]:mr-3'>
                       <CheckOutlined className=' text-darkblue font-semibold text-lg' />
                            <h1 className='text-lg'>  You Can Download Your Resume</h1>
                        </li>
                        <li className=' flex flex-row items-center justify-items-center [&>*]:mr-3'>
                       <CheckOutlined className=' text-darkblue font-semibold text-lg' />
                            <h1 className='text-lg'>  You can Download like Pdf,File,Html,Word...</h1>
                        </li>
                        </ul>
                  </div>

                    <div className='mb-2'>
                    <label className="block text-sm font-semibold text-gray-800">
                        Send Money 
                    </label>

                   <div className=' flex flex-row items-center justify-evenly'>
                   <SendMoney place="$" button="send" />
                   </div>

                    </div>
                </form>
            </div>
        </div>
    );
}