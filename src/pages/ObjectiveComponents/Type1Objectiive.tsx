import React, { useContext, useEffect } from "react";
import TextField from "../component/TextField";
import { SearchNameContax } from "../SelectResumeTemplateLayout/CreateLayoutHome";
import { ColorGettingRandom } from "../../utils/coloGeeting";

interface ClassStyleHeaderList {
    background: any
    padding: string
    borderStyle: string
    borderWidth: string
    textAlign: string
    color: any

}
export default function Type1Objectiive() {


    const Name = useContext(SearchNameContax);
    let colorList: Array<any> = [];


    const ColorChange = async () => {
        colorList.length = 0
        for (let i = 0; i <= 7; i++) {
            colorList.push(await ColorGettingRandom())
        }
        console.log(colorList);
    }



    useEffect(() => {
        if (colorList.length == 0) ColorChange()
    }, [])

    const ClassStyleHeaderList: any = [
        {
            background: colorList[0],
            padding: '12px',
            borderStyle: 'solid',
            borderWidth: '1px',
            textAlign: 'right',
            color: colorList[1]
        },

        {
            background: colorList[2],
            padding: '12px',
            textAlign: 'left',
            borderStyle: 'solid',
            borderWidth: '1px',
            color: colorList[3]
        },
        {
            background: colorList[4],
            padding: '12px',
            textAlign: 'center',
            borderStyle: 'solid',
            borderWidth: '1px',
            color: colorList[5]

        },
        {
            background: colorList[6],
            padding: '12px',
            borderStyle: 'solid',
            borderWidth: '1px',
            color: colorList[7]
        },]
    const ClassStyleHeaderListh1 = { fontWeight: '600', fontSize: '32px', letterSpacing: '0.5rem', margin: '0px 10px', height: '45px' }

    return <ul className=" w-full px-5 [&>*]:mb-10">
        <li>
            <div style={ClassStyleHeaderList[0]} >
                <h1 style={ClassStyleHeaderListh1} >Sakthivel . R</h1>
            </div>
        </li>
        <li>
            <div style={ClassStyleHeaderList[1]} >
                <h1 style={ClassStyleHeaderListh1} >Sakthivel . R</h1>
            </div>
        </li>
        <li>
            <div style={ClassStyleHeaderList[2]} >
                <h1 style={ClassStyleHeaderListh1} >Sakthivel . R</h1>
            </div>
        </li>
        <li>
            <div style={ClassStyleHeaderList[3]} >
                <h1 style={ClassStyleHeaderListh1} ></h1>
            </div>
        </li>
        <div className="flex flex-row items-center justify-between">
            <button className=" button1" onClick={ColorChange}>Change Design </button>


        </div>
    </ul>
}