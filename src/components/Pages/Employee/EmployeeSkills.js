import React, { useEffect, useState } from 'react'
import { Button, Card, Modal, Select, Form, message } from 'antd'
import { BsPencil, BsTrash2 } from 'react-icons/bs'
import { FiTrash2, FiEdit2 } from 'react-icons/fi'

function EmployeeSkills({ data }) {

  const [empSkills, setEmpSkills] = useState([]);

  
  

  const { Option } = Select;

  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [editSkill, setEditSkill] = useState({
    id: 0,
    skill: '',
    rating: ''
  })
  const [deleteSkill, setDeleteSkill] = useState({
    id: 0,
    skill: ''
  })


  const handleDelete = (id, skill) => {
    console.log(id, skill);
    setDeleteSkill({
      id: id,
      skill: skill,
    })
    setVisibleDelete(true);
  }
  const handleEdit = (id, skill, rating) => {
    console.log(id, skill, rating);
    setEditSkill({
      id: id,
      skill: skill,
      rating: rating
    })
    setVisibleEdit(true);
  }

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisibleEdit(false);
    setVisibleDelete(false);
  };

  const handleDeleteFinish = () => {
    setConfirmLoading(true);
    const deleteSkillId = deleteSkill.id;
    console.log(deleteSkillId);
    setTimeout(function () {
      setConfirmLoading(false);
      setVisibleDelete(false);
      message.success('Skill has been deleted successfully', 3);
    }, 2000)
  }

  const onFinish = (values) => {
    setConfirmLoading(true);
    values.emp_skill_id = editSkill.id;
    console.log(values);
    setTimeout(function () {
      setConfirmLoading(false);
      setVisibleEdit(false);
      message.success('Your skill rating has been updated successfully', 3);
    }, 2000)
  }


  useEffect(() => {
    setEmpSkills(data);
  }, [data, editSkill, deleteSkill])
  
  return (
    <Card className='custom-card mt-4'>
      <h6 className='small-h6 uppercase mb-2'>My Skills</h6>
      <div className='capsule-wrapper multi-color-capsules'>
        {
          empSkills.map((item) => (
            <div className={'capsule-wrap color-' + item.emp_skill_rating}>
              {item.emp_skill} - {item.emp_skill_rating}
              <div className='capsule-actions'>
                <Button type='link' onClick={() => handleEdit(item.emp_skill_id, item.emp_skill, item.emp_skill_rating)}><FiEdit2 size={19} /></Button>
                <Button onClick={() => handleDelete(item.emp_skill_id, item.emp_skill)} type='link'><FiTrash2 size={19} /></Button>
              </div>
            </div>
          ))
        }

      </div>
      <Modal
        title={false}
        visible={visibleEdit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose={true}
      >
        <div className='edit-model-content'>
          <p className='mb-2 pb-4'>Update <span>“{editSkill.skill}”</span> Skill Rate</p>
          <Form
            name="update-skills-form"
            initialValues={{ skill_rating: editSkill.rating }}
            layout="vertical"
            onFinish={onFinish}
          >
            <div className='d-flex w-100'>
              <div style={{ width: '70%', marginRight: '26px' }}>
                <Form.Item
                  name="skill_rating"
                  rules={[{ required: true, message: 'Skill rating is required!' }]}>

                  <Select
                    allowClear
                    showArrow
                    style={{ width: '100%' }}
                  >

                    <Option value={1}>1</Option>
                    <Option value={2}>2</Option>
                    <Option value={3}>3</Option>
                    <Option value={4}>4</Option>
                    <Option value={5}>5</Option>
                    <Option value={6}>6</Option>
                    <Option value={7}>7</Option>
                    <Option value={8}>8</Option>
                    <Option value={9}>9</Option>
                    <Option value={10}>10</Option>

                  </Select>
                </Form.Item>
              </div>
              <div>
                <Button loading={confirmLoading} block type="primary" className='px-5' htmlType="submit" size="large">Update</Button>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
      <Modal
        title={false}
        visible={visibleDelete}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose={true}
      >
        <div className='edit-model-content text-center'>
          <h2 className='mb-3'>Delete Skill</h2>
          <p className='mb-2 pb-3'>Are you sure you want to detele <span>“{deleteSkill.skill}”</span> skill?</p>
          <div className='d-flex w-100  justify-content-center'>
            <Button size='large' className='px-5 me-4' onClick={handleCancel}>Cancel</Button>
            <Button loading={confirmLoading} onClick={handleDeleteFinish} type="primary" className='px-5' size="large">Delete</Button>
          </div>
        </div>
      </Modal>
    </Card>

  )
}

export default EmployeeSkills