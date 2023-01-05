import React from 'react'
import './Sidebar.css';
import SpotifyLogo from './Images/SpotifyLogo.jpg'
import SidebarOption from './SidebarOption';
import Search from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import Home from '@mui/icons-material/Home';

import { useDataLayerValue } from './DataLayer';


function Sidebar() {

    const[{playlists},] = useDataLayerValue();

  return (
   
        <div className='sidebar'>
            <img src={SpotifyLogo} alt='Spotify Sidebar logo' className='sidebar__logo'/>
            <SidebarOption Icon = {Home} title = "Home"/>
            <SidebarOption Icon = {Search} title = "Search" />
            <SidebarOption Icon = {LibraryMusicIcon} title = "Your Library"/>

            <br/>
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr/>
            

            {playlists?.items?.map((playlist) => (
            <SidebarOption key={playlist.id} title={playlist.name} />
            
            ))}
            
        </div>
    
  )
}

export default Sidebar