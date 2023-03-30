import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value: string) => console.log(value);

const App = (props) => (
  <Space direction="vertical">

    <Search
      placeholder={props.place}
      allowClear
      enterButton={props.button}
      size="large"
      onSearch={onSearch}
      type="number"
    />
  
  </Space>
);


export default App;