import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log('click left button', e);
};

const handleMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};

let items;


const menuProps = {
  items,
  onClick: handleMenuClick,
};

const App = (props) => {
  menuProps.items = props.item
return <Space wrap className='w-full'>
    <Dropdown.Button  menu={menuProps} className="w-full " onClick={handleButtonClick}>
      {props.title}
    </Dropdown.Button>
  </Space>

}


export default App;