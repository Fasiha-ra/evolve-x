import React from 'react'
import Discussion from './Comment'
import UpgradeCourse from '../Sidebar/UpgradeCourse'
import { RightBarWrapper } from './RightSideBar.styles'
import Blog from './Blog'

const RightSideBar = () => {
  return (
    <RightBarWrapper>
      <div className="discussion">
      <Discussion/>
      </div>
      <Blog/>
     <div className="course">
     <UpgradeCourse/>
     </div>
    </RightBarWrapper>
  )
}

export default RightSideBar