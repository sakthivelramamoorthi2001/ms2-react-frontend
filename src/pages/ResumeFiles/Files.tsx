import React from "react";
import temp1 from '../../assets/temp6.png'
import temp2 from '../../assets/temp2.svg'
import temp3 from '../../assets/temp4.png'
import temp4 from '../../assets/temp1.svg'
const App = () => {

    return <div>
    <div className="grid grid-cols-3 gap-4">
    <img src={temp1} alt="Image 1" className="w-full h-auto hover:border hover:border-black hover:p-2" />
    <img src={temp2}  alt="Image 2" className="w-full h-auto hover:border hover:border-black hover:p-2" />
    <img src={temp3}  alt="Image 3" className="w-full h-auto hover:border hover:border-black hover:p-2" />
    <img src={temp4}  alt="Image 4" className="w-full h-auto hover:border hover:border-black hover:p-2" />
    <img src={temp1} alt="Image 5" className="w-full h-auto hover:border hover:border-black hover:p-2" />
    <img src={temp4}  alt="Image 4" className="w-full h-auto hover:border hover:border-black hover:p-2" />    
  </div>

    <div className="flex justify-center">
 
    <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
        <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">Upload
                Image(jpg,png,svg,jpeg)</label>
            <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo</p>
                    </div>
                    <input type="file" className="opacity-0" />
                </label>
            </div>
        </div>
        <div className="flex p-2 space-x-4">
            <button className="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Cannel</button>
            <button className="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Create</button>
        </div>
    </div>
</div> 
</div>

    
}

export default App;