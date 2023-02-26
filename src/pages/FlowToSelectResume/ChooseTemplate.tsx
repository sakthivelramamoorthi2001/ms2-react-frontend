import React from "react";
import temp1 from '../../assets/temp6.png'
import temp2 from '../../assets/temp2.svg'
import temp3 from '../../assets/temp4.png'
import temp4 from '../../assets/temp1.svg'
import { Input } from 'antd';
import { useNavigate } from "react-router-dom";


const App = () => {
    const tempList = [{ img: temp1, path: "/login" }, { img: temp2, path: "/logi" }, { img: temp3, path: "/logi" }, { img: temp4, path: "/logi" }]

    const useNavi = useNavigate();

    const pathChange = (e) => {
        useNavi(e)
    };

    const listImg = tempList.map(item => {
        if (item) {
            return <div className=" w-[300px] h-[400px] hover:border hover:p-2 hover:border-black">
                <img src={item.img} onClick={() => { pathChange(item.path) }} alt={item.img} className=" w-auto h-auto" />
            </div>
        } else return ''
    })

    return <div  >

        <div className=" text-right  mt-10 flex flex-row items-center justify-between ">
            <h1 className=" text-3xl font-serif font-thin" >Choose Your Modal of Resume </h1>

            <div>
                <Input placeholder="Search resume" style={{ width: '300px', border: "1px solid ", marginBottom: '10px', padding: '4px', marginLeft: '20px', outline: "none" }} />
                <button> Search </button>
            </div> </div><div className=" w-full h-[70vh] flex flex-row items-center justify-center [&>*]:mr-5">
            {listImg}
        </div>
    </div>
}

export default App;