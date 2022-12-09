import React, { useContext, useEffect } from 'react'
import EmployeeDashboard from '../Pages/Employee';
import MainHeader from './Header';

function AppLayout() {
  return (
    <>
      <MainHeader />
      <EmployeeDashboard />
    </>
  )
}
export default AppLayout