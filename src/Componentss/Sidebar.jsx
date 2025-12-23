import React, { useState } from 'react'

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    { id: 'home', label: 'Home', icon: 'M3 12a9 9 0 1118 0 9 9 0 01-18 0z' },
    { id: 'webinars', label: 'Webinars', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2zm0-8C5.373 2 1 5.373 1 10s4.373 8 11 8 11-3.373 11-8-4.373-8-11-8z' },
    { id: 'billing', label: 'Billing', icon: 'M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6z' },
    { id: 'users', label: 'User Management', icon: 'M17 20h5v-2a3 3 0 00-5.856-1.487M7 20H2v-2a3 3 0 015.856-1.487M15 9a3 3 0 11-6 0 3 3 0 016 0z' },
    { id: 'settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.026 2.37 1.567a1.724 1.724 0 00.566 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.026 3.31-1.567 2.37a1.724 1.724 0 00-2.572.566c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.026-2.37-1.567a1.724 1.724 0 00-.566-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.026-3.31 1.567-2.37a1.724 1.724 0 002.572-.566z' },
  ]

  return (
    <section className={`min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 hidden md:flex flex-col border-r border-blue-200 shadow-lg transition-all duration-300 ${isCollapsed ? 'w-24' : 'w-1/5'}`}>
      {/* Header/Profile Section */}
      <div className='p-6 border-b border-blue-200'>
        <div className='flex items-center justify-between'>
          {!isCollapsed && (
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>S</span>
              </div>
              <div>
                <p className='text-blue-900 font-semibold text-sm'>Sahil</p>
                <p className='text-blue-600 text-xs'>Admin</p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className='w-full flex justify-center'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>S</span>
              </div>
            </div>
          )}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className='text-blue-600 hover:text-blue-900 transition-colors p-1 hover:bg-blue-200 rounded-lg'
          >
            {isCollapsed ? (
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18l-6-6 6-6M9 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18l6-6-6-6M3 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className='flex-1 px-4 py-6 space-y-2'>
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActiveLink(item.id)}
            title={item.label}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group ${isCollapsed ? 'justify-center' : ''} ${
              activeLink === item.id
                ? 'bg-blue-300 text-blue-900 shadow-md'
                : 'text-blue-700 hover:bg-blue-200/60 hover:text-blue-900'
            }`}
          >
            <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-200 ${activeLink === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
              <path d={item.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            {!isCollapsed && (
              <>
                <span className='font-medium text-sm'>{item.label}</span>
                {activeLink === item.id && (
                  <div className='ml-auto w-2 h-2 rounded-full bg-blue-900'></div>
                )}
              </>
            )}
          </a>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className='p-4 border-t border-blue-200 space-y-3'>
        <button 
          title="Profile"
          className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-blue-700 hover:bg-blue-200/70 hover:text-blue-900 transition-all duration-200 text-sm font-medium ${isCollapsed ? 'justify-center' : ''}`}
        >
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M9 12c2.21 0 4 1.79 4 4v2H5v-2c0-2.21 1.79-4 4-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          {!isCollapsed && <span>Profile</span>}
        </button>
        <button 
          title="Logout"
          className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-blue-700 hover:bg-blue-300/30 hover:text-blue-900 transition-all duration-200 text-sm font-medium ${isCollapsed ? 'justify-center' : ''}`}
        >
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </section>
  )
}

export default Sidebar
