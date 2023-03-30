import { Card } from 'antd';
import React from 'react';

interface Propsing {
    title:string,
    content : Array<string>
}
const App = (props:Propsing) => {
//  const contennShow = props.content.map(item => {
//     return <p>{item}</p>
//  })
return  <Card title={props.title} className=" text-white bg-gray-400  hover:bg-gray-500 hover:text-white " bordered={false} style={{ width: 300 ,}}>
        <h1 className='text-2xl text-darkblue '>{props.content[0]}</h1>
        <p className=''>{props.content[1]}</p>
 </Card>

}

export default App;