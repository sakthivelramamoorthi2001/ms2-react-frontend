import React from "react";
import Error from '../ErrorPage'
const App = () => {
    return <div className=" flex flex-col items-center justify-center [&>*]:mb-10">
        <h1 className=" text-3xl font-semibold mt-10 text-red-400 ">VIP User Can Only Create It</h1>
        <Error />
    </div>

}

export default App