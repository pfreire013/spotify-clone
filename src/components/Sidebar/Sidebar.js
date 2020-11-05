import React from 'react'
import SidebarOption from '../SidebarOption'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from '../../DataLayer'

const optionsSidebar = [
  {
    id: 1,
    title: 'Home',
    icon: HomeIcon
  },
  {
    id: 2,
    title: 'Search',
    icon: SearchIcon
  },
  {
    id: 3,
    title: 'Your Library',
    icon: LibraryIcon
  }
]

function Sidebar () {
  const [{ playlists }, dispatch] = useDataLayerValue()
  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />
      {
        optionsSidebar.map(optionSidebar => (
          <SidebarOption
            key={optionSidebar.id}
            title={optionSidebar.title}
            Icon={optionSidebar.icon}
          />
        ))
      }

      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />

      <div className='sidebar__playlists'>
        {
        playlists?.items?.map(playlist => (
          <SidebarOption key={playlist.id} title={playlist.name} />
        ))
      }
      </div>

    </div>
  )
}

export default Sidebar
