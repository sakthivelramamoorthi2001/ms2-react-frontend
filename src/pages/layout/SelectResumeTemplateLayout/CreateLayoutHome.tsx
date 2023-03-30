import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import TextField from "../../component/TextField";
import Type1Header from "../../FlowToSelectResume/ChooseTemplate";
import { Input } from 'antd';
import Drawer from '../../component/Drawer'

export const SearchNameContax: any = createContext('');
export default function CreateLayoutHome() {
    const [Name, setName] = useState('');
    return <div className="commenStyle">

        <SearchNameContax.Provider value={{ Name, setName }}>
               
            <div className=" flex flex-col items-end">
                <div className=" w-1/12 text-right mb-10" >
                    <Drawer title="Add Your Details " />
                                </div>

                <div className="flex flex-col items-center justify-center">
                <Outlet />
                </div>
            </div>

        </SearchNameContax.Provider>

    </div>
}