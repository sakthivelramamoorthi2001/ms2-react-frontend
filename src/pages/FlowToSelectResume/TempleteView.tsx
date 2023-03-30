import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Design1 from './TypeOFResume/Design1'
import Design2 from './TypeOFResume/Design2'
import Error from '../ErrorPage'

const NavigateBaseType = {
    1:<Design1 />,
    2:<Design2 />
}
const App = () => {
    const { id } = useParams();
    
    if (!id) {
        return <h1>Loading..</h1>
    }

    useEffect(()=>{

    })

    const showTemplate =  Object.keys(NavigateBaseType).find(item => {
        return item == id;
    }) 

    if (!showTemplate) {
        return <Error />
        
    }
   
 


    return <div>
  { NavigateBaseType[showTemplate] }
    </div>
}

export default App;