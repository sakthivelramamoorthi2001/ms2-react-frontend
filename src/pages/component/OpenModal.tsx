import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';


interface propsType {
  titleName: String
  message: String
}
const OpenModal = (props: propsType) => {


  const useNavi = useNavigate()
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {

    setConfirmLoading(true);
    localStorage.clear()
    setTimeout(() => {
      setOpen(false);
      useNavi('/')
      setConfirmLoading(false);
    }, 2000);

  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>

      <Button type="primary" onClick={showModal} className='border border-transparent w-20 h-10 flexing-row bg-darkblue text-white'>{props.titleName}</Button>

      <Modal
        title={props.titleName}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{props.message}</p>
      </Modal>
    </>
  );
};

export default OpenModal;