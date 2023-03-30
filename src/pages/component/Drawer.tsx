import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import './component.css'
const { Option } = Select;

const App = (props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const QualificationDivision = () => {
    return <div>
        <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="qualification"
            label="Qualification"
            rules={[{ required: true, message: 'Please enter an Qualification' }]}>
          <Input placeholder='Please enter an Qualification' />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="perchentage"
            label="Percentage"
            rules={[{ required: true, message: 'Please choose the Percentage' }]}
          >
            <Select placeholder="Please choose the type">
              <Option value="riate">60% - 70%</Option>
              <Option value="piate">71% - 80%</Option>
              <Option value="pivte">81% - 90%</Option>
              <Option value="iate">91% - 100%</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="schoolName"
            label="Univercity Name"
            rules={[
              {
                required: true,
                message: 'please enter 10th school',
              },
            ]}
          >
            <Input placeholder="please enter Univercity Name" />
          </Form.Item>
        </Col>
      </Row>

    </div>
    }

  const [QualificationList , setQualificationList ]= useState([<QualificationDivision />])

  const addQulaification = () => {
    
    setQualificationList(prev => ([...prev, <QualificationDivision/>]))
  }

  return (
    <>
      <Button type="primary" className="flex items-center justify-center"    onClick={showDrawer} icon={<PlusOutlined />}>
        {props.title}
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose} className="flex items-center justify-center" type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
        
        {/* name emaill */}

        <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Please enter Email ' }]}
              >
                <Input placeholder="Please enter Email " type='email' />
              </Form.Item>
            </Col>
           
          </Row>
         
          {/* phone and Github link */}

         
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[{ required: true,  message: 'Please enter Phone' }]}
              >
                <Input placeholder="Please enter Phone Number" type='number' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="github"
                label="Github Link"
                rules={[{ required: true, message: 'Please enter url' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonBefore="http://"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>

          {/* objective */}

          
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="objective"
                label="Objective"
                rules={[
                  {
                    required: true,
                    message: 'please enter Objective',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter Objective" />
              </Form.Item>
            </Col>
          </Row>

          {/* education */}

        <div className='border border-gray-300 p-3'>
<div className='flex items-end justify-end'>
<a className='buttonbg items-center flex ' onClick={()=>{addQulaification()}}><PlusOutlined /> add</a>
</div>
        <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="qualification"
                label="Qualification"
                rules={[{ required: true, message: 'Please enter an Qualification' }]}>
              <Input placeholder='Please enter an Qualification' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="perchentage"
                label="Percentage"
                rules={[{ required: true, message: 'Please choose the Percentage' }]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="riate">60% - 70%</Option>
                  <Option value="piate">71% - 80%</Option>
                  <Option value="pivte">81% - 90%</Option>
                  <Option value="iate">91% - 100%</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="schoolName"
                label="Univercity Name"
                rules={[
                  {
                    required: true,
                    message: 'please enter 10th school',
                  },
                ]}
              >
                <Input placeholder="please enter Univercity Name" />
              </Form.Item>
            </Col>
          </Row>

        </div>

        

          

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[{ required: true, message: 'Please choose the approver' }]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[{ required: true, message: 'Please choose the dateTime' }]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={(trigger) => trigger.parentElement!}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default App;