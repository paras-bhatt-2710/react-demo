import React, { useState } from 'react'
import EmloyeeTeamInfo from './EmloyeeTeamInfo'
import EmployeeCV from './EmployeeCV'
import EmployeeInfo from './EmployeeInfo'
import EmployeeSkills from './EmployeeSkills'
import EmployeeSkillsForm from './EmployeeSkillsForm'


const skillData = [
  {
    'skill_id': 1,
    'skill_title': 'Programming',
    'skill_data': [
      {
        sub_skill_id: 11,
        sub_skill_name: 'Python',
      },
      {
        sub_skill_id: 12,
        sub_skill_name: 'C++',
      },
      {
        sub_skill_id: 13,
        sub_skill_name: 'Ruby',
      },

      {
        sub_skill_id: 14,
        sub_skill_name: 'Java',
      },
      {
        sub_skill_id: 15,
        sub_skill_name: 'PowerShell',
      },
      {
        sub_skill_id: 16,
        sub_skill_name: 'ASP.Net',
      }
    ]
  },
  {
    'skill_id': 2,
    'skill_title': 'UI & Front End',
    'skill_data': [
      {
        sub_skill_id: 21,
        sub_skill_name: 'HTML',
      },
      {
        sub_skill_id: 22,
        sub_skill_name: 'CSS',
      },
      {
        sub_skill_id: 23,
        sub_skill_name: 'JavaScript',
      },
      {
        sub_skill_id: 24,
        sub_skill_name: 'React',
      },
      {
        sub_skill_id: 25,
        sub_skill_name: 'Node',
      },
      {
        sub_skill_id: 26,
        sub_skill_name: 'SASS'
      }
    ]
  },
  {
    'skill_id': 3,
    'skill_title': 'Data analysis',
    'skill_data': [
      {
        sub_skill_id: 31,
        sub_skill_name: 'SQL'
      },
      {
        sub_skill_id: 32,
        sub_skill_name: 'PostGrace'
      },
      {
        sub_skill_id: 33,
        sub_skill_name: 'MongoDB'
      }
    ]
  },
]

const empInfo =
{
  emp_avatar: '',
  emp_id: 2123,
  emp_name: 'Cameron Williamson',
  emp_designation: 'Sr. Software Engineer',
  emp_id: '10390',
  emp_email: 'cameron.w@xyz.com',
  emp_contact: '+1 (815) 44824',
  emp_reporting_manager: 'Leslie Alexander',
  emp_group: 'Innovation'
}




function EmployeeDashboard() {

  const [empSkills, setEmpSkills] = useState([
    {
      emp_skill_id: 21,
      emp_skill: 'HTML',
      emp_skill_rating: '9'
    },
    {
      emp_skill_id: 22,
      emp_skill: 'CSS',
      emp_skill_rating: '9'
    },
    {
      emp_skill_id: 23,
      emp_skill: 'JavaScript',
      emp_skill_rating: '7'
    },
  ])


  return (
    <div className='custom-container'>
      <div className='row'>
        <div className='col-sm-8'>
          <EmployeeInfo data={empInfo} />
        </div>
        <div className='col-sm-4'>
          <EmloyeeTeamInfo data={empInfo} />
        </div>
        <div className='col-sm-8'>

          <EmployeeSkillsForm skillData={skillData} />
          <EmployeeSkills data={empSkills} />
        </div>
        <div className='col-sm-4'>
          <EmployeeCV />

        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard