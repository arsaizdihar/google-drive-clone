import React from 'react'
import ICClock from '~/assets/icons/ICClock'
import ICComputer from '~/assets/icons/ICComputer'
import ICMyDrive from '~/assets/icons/ICMyDrive'
import ICStar from '~/assets/icons/ICStar'
import ICTrash from '~/assets/icons/ICTrash'
import ICUserShadow from '~/assets/icons/ICUserShadow'
import { CollapsibleSideBarMenu, SideBarMenu } from '../common/SideBarMenu'

function SideBar() {
  return (
    <div className="w-sidebar flex-shrink-0">
      <div className="p-3">
        <button className="flex h-12 items-center rounded-full bg-white pr-8 text-sm shadow-surround duration-200 hover:bg-gray-300 hover:shadow-surround-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            className="mx-3"
          >
            <path fill="#34A853" d="M16 16v14h4V20z" />
            <path fill="#4285F4" d="M30 16H20l-4 4h14z" />
            <path fill="#FBBC05" d="M6 16v4h10l4-4z" />
            <path fill="#EA4335" d="M20 16V6h-4v14z" />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>
          New
        </button>
      </div>
      <div className="flex flex-col pr-4 font-roboto text-gray-600">
        <CollapsibleSideBarMenu
          icon={<ICMyDrive />}
          text="My Drive"
          active
        ></CollapsibleSideBarMenu>
        <CollapsibleSideBarMenu
          icon={<ICComputer />}
          text="Computers"
        ></CollapsibleSideBarMenu>
        <SideBarMenu icon={<ICUserShadow />} text="Shared with me" />
        <SideBarMenu icon={<ICClock />} text="Recent" />
        <SideBarMenu icon={<ICStar />} text="Starred" />
        <SideBarMenu icon={<ICTrash />} text="Bin" />
      </div>
    </div>
  )
}

export default SideBar
