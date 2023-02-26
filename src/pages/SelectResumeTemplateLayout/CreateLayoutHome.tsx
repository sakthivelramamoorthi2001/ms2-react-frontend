import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import TextField from "../component/TextField";
import Type1Header from "../FlowToSelectResume/ChooseTemplate";
export const SearchNameContax: any = createContext('');
export default function CreateLayoutHome() {
    const [Name, setName] = useState('');
    return <div className="commenStyle">

        <SearchNameContax.Provider value={{ Name, setName }}>
            <div className="flex flex-col items-center justify-center">
                <Outlet />
            </div>
        </SearchNameContax.Provider>

    </div>
}