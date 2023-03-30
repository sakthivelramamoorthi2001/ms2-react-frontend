import React from 'react';
import { Input } from 'antd';



export default function TextField(props: any) {
    return <Input placeholder={props.placeHolderName} style={{ width: '200px', border: "1px solid ", marginBottom: '10px', padding: '4px', marginLeft: '20px', outline: "none" }} />
}



