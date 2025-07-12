import React from 'react'
import SideBar from '../Components/SideBar'
import ChatContainer from '../Components/ChatContainer'
import RightSidebar from '../Components/RightSidebar'

const HomePage = () => {

    // Startfromhere-33min18sec

    return (
        <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
            <div className='backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative'>
                <SideBar />
                <ChatContainer />
                <RightSidebar />
            </div>

        </div>
    )
}

export default HomePage
