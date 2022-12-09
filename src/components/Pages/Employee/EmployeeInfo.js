import { Card } from 'antd'
import React from 'react'
import empAvatar from '../../../assets/images/employee-profile-pic.png'
import { AiOutlineContacts } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { BiPhoneCall } from 'react-icons/bi';

function EmployeeInfo({ data }) {
  return (
    <Card className='custom-card mt-4'>
      <div className='emp-info-boxes'>
        <div className='emp-info-box employee-avatar-box'>
          <img src={empAvatar} alt="" />
          <div className='emp-detail'>
            <h4>{data.emp_name}</h4>
            <span className='emp-designation'>{data.emp_designation}</span>
          </div>
        </div>
        <div className='emp-info-box'>
          <div className='emp-info-icon orange-icon-box'>
            <AiOutlineContacts size={21} />
          </div>
          <div className='emp-detail'>
            <span className='emp-detail-title'>Employee ID</span>
            <h6>{data.emp_id}</h6>
          </div>
        </div>
        <div className='emp-info-box employee-email-box'>
          <div className='emp-info-icon green-icon-box'>
            <FiMail size={21} />
          </div>
          <div className='emp-detail'>
            <span className='emp-detail-title'>Email ID</span>
            <h6>{data.emp_email}</h6>
          </div>
        </div>
        <div className='emp-info-box'>
          <div className='emp-info-icon yellow-icon-box'>
            <BiPhoneCall size={21} />
          </div>
          <div className='emp-detail'>
            <span className='emp-detail-title'>Contact</span>
            <h6>{data.emp_contact}</h6>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default EmployeeInfo