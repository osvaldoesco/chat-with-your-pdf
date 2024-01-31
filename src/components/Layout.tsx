import { ReactNode } from 'react'

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className='w-screen h-screen flex flex-col xl:flex-row bg-white'>
      {children}
    </div>
  )
}

export default Layout;