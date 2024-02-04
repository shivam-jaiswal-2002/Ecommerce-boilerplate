import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='p-0 flex flex-col bg-blue-50 h-full'>
        <Header />
        <Outlet /> 
    </div>
  );
}

export default Layout