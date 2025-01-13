import MobileNav from '@/components/MobileNav'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='root'>
      <Sidebar/>
      <MobileNav/>
        <div className='root-container'>
            <div className='root-wraper'>
            {children}
            </div>
            </div>
     </main>
  )
}

export default RootLayout