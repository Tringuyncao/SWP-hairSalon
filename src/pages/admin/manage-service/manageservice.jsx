import { Button, Modal, Table } from 'antd'
import React, { useState } from 'react'

function ManageService() {
    const [datas,setDatas] =useState([]);
    const [showModal, setShowModal] =useState(false);
  return (
    <div>
      <Button onClick={()=> setShowModal(true)}>
        Add
      </Button>
    <Table/>
    <Modal open={showModal}>
    
    </Modal>
    </div>
  )
}

export default ManageService