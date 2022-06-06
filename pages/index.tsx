import type { NextPage } from 'next'
import NavBar from '~/components/desktop/NavBar'
import SideBar from '~/components/desktop/SideBar'

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="flex-1"></div>
      </div>
    </>
  )
}

export default Home
