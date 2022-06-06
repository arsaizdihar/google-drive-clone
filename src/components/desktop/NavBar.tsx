import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/img/logo.png'
import ProfileImage from 'public/img/profile.png'
import React from 'react'
import ICCog from '~/assets/icons/ICCog'
import ICGridDots from '~/assets/icons/ICGridDots'
import ICOptions from '~/assets/icons/ICOptions'
import ICQuestionCircle from '~/assets/icons/ICQuestionCircle'
import ICSearch from '~/assets/icons/ICSearch'
import IconButton from '../common/IconButton'

function NavBar() {
  return (
    <nav className="flex items-center bg-white p-2 text-gray-600">
      <div className="flex w-sidebar items-center gap-2 pl-3">
        <Image src={Logo} width={40} height={40} />
        <Link href="/">
          <a className="font-google text-xl text-[22px]">Drive</a>
        </Link>
      </div>
      <div className="flex flex-grow items-center justify-between">
        <div className="relative w-[720px] flex-shrink">
          <ICSearch className="pointer-events-none absolute left-0 top-1/2 mx-3 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search in Drive"
            className="w-full rounded-lg bg-gray-300 py-3 pr-10 pl-12 focus:bg-white focus:shadow-md focus:outline-none"
          />
          <ICOptions className="pointer-events-none absolute right-0 top-1/2 mx-3 -translate-y-1/2" />
        </div>
        <div className="flex items-center gap-7">
          <div className="flex items-center gap-1">
            <IconButton>
              <ICQuestionCircle />
            </IconButton>
            <IconButton>
              <ICCog />
            </IconButton>
          </div>
          <div className="flex items-center gap-2">
            <IconButton>
              <ICGridDots />
            </IconButton>
            <button
              type="button"
              className="relative h-9 w-9 overflow-hidden rounded-full"
            >
              <Image src={ProfileImage} layout="fill" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
