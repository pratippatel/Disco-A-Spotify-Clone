import React from "react";
import "./Header.css";
import { useDataLayerValue } from "./DataLayer";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect } from "react";

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
    console.log("The USER DET",user);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      
      <div className="header__right">
        
        <a className="gitHubLink" href="https://github.com/pratippatel/Disco-A-Spotify-Clone" target="_blank" rel="noopener noreferrer"><GitHubIcon className="gitHubIcon"/> GET CODE</a>
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;