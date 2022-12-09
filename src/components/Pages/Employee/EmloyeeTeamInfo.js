import React from 'react'
import { Card } from 'antd';

function EmloyeeTeamInfo({ data }) {
  return (
    <Card className='custom-card mt-4 dark-bg bg-shapes emp-team-info-card'>
      <div className='emp-info-boxes emp-team-info-box'>
        <div className='emp-info-box emp-team-info-box dark'>
          <div className='emp-detail'>
            <span className='emp-detail-title'>Reporting manager</span>
            <h6>{data.emp_reporting_manager}</h6>
          </div>
        </div>
        <div className='emp-info-box emp-team-info-box dark'>
          <div className='emp-detail'>
            <span className='emp-detail-title'>Group</span>
            <h6>{data.emp_group}</h6>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default EmloyeeTeamInfo