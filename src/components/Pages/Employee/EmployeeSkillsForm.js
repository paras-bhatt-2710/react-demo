import React, { useRef, useState, useEffect } from 'react'
import { Form, Input, Button, Card, Select, message } from 'antd';

function EmployeeSkillsForm({ skillData }) {

  const [data, setData] = useState([]);
  const [btnLoading, setBtnLoading] = useState(false);
  const skillsFormRef = useRef(null);
  const { Option, OptGroup } = Select;

  const [input, setInput] = useState('');

  const onFinish = async (values) => {
    setBtnLoading(true);
    let skillValidation = false;
    data.map(item => (item.skill_data.filter(value => {
      if (value.sub_skill_id === values.skill) {
        skillValidation = true;
      }
    }
    )));
    if (!skillValidation) {
      skillsFormRef.current.setFields([
        {
          name: 'skill',
          errors: ['Please enter skill from below list'],
        },
      ]);

      return;
    }
    console.log(values);
    setTimeout(function() {
      message.success("Skills Added Successfully");
      setBtnLoading(false);
    }, 2000)
  };

  const handleSkills = (e) => {

    setInput(e.target.id);
    skillsFormRef.current.setFieldsValue({
      skill: e.target.id,
    });
  }

  useEffect(() => {
    setData(skillData);
  }, [skillData])


  return (
    <Card className="custom-card custom-card-with-header mt-4">
      <div className='custom-card-header dark-bg bg-shapes'>
        <h6 className='small-h6 uppercase'>Select &amp; rate your skill</h6>
        <Form
          name="skills-form"
          ref={skillsFormRef}
          initialValues={{ remember: false }}
          layout="vertical"
          onFinish={onFinish}
        >
          <div className='row'>
            <div className='col-sm-7'>
              <Form.Item
                name="skill"
                rules={[
                  {
                    required: true,
                    message: 'Please select skills from list!'
                  }
                ]}
              >


                <Select showSearch placeholder="Search your skills" /* onChange={handleChange} */>
                  {
                    data?.map((item, i) => (
                      <OptGroup key={item.skill_id} label={item.skill_title}>
                        {item.skill_data.map((value, index) => (
                          <Option key={value.sub_skill_id} value={value.sub_skill_id}>{value.sub_skill_name}</Option>
                        ))}
                      </OptGroup>
                    ))
                  }
                </Select>
              </Form.Item>
            </div>
            <div className='col-sm-3'>
              <Form.Item
                name="skill_rating"
                rules={[{ required: true, message: 'Skill rating is required!' }]}>

                <Select
                  allowClear
                  showArrow
                  style={{ width: '100%' }}
                  placeholder="Rate your skill"
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
            <div className='col-sm-2'>
              <Button loading={btnLoading} block type="secondary" htmlType="submit" size="large">Add</Button>
            </div>
          </div>
        </Form>
      </div>

    </Card >
  )
}

export default EmployeeSkillsForm