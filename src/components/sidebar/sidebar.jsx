import React from "react";
import homeIcon from "../../assets/icons/home.svg";
import trendingIcon from "../../assets/icons/trending.svg";
import discoverIcon from "../../assets/icons/discover.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import musicIcon from "../../assets/icons/music.svg";

function Sidebar() {
  return (
    <div
      className="container"
      style={{
        paddingLeft: "20px",
        backgroundColor: "#000000",
        color: "white",
        height: "100vh",
        width: "20vw",
        margin: "0",
        marginTop: "-20px",
      }}
    >
      <div className="musicIcon" style={{ paddingTop: "20px" }}>
        <h2 className="heardermusic">
          <img src={musicIcon} />
          <span style={{ color: "#FF5656" }}> Dream</span>Music
        </h2>
      </div>
      <nav
        className="navIntem"
        style={{ marginTop: "25%", listStyleType: "none" }}
      >
        <p>Menu</p>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <p>
              <img src={homeIcon} alt="Home" /> Home
            </p>
          </li>
          <li>
            <p>
              <img src={trendingIcon} alt="Trends" /> Trends{" "}
            </p>
          </li>
          <li>
            <p>
              {" "}
              <img src={musicIcon} alt="Library" /> Library{" "}
            </p>
          </li>
          <li>
            <p>
              {" "}
              <img src={discoverIcon} alt="Discover" /> Discover{" "}
            </p>
          </li>
        </ul>
      </nav>
      <footer
        className="footer"
        style={{
          marginTop: "60%",
          listStyleTyle: "none",
        }}
      >
        <p>General</p>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <p>
              <img src={settingsIcon} alt="Settings" /> Settings{" "}
            </p>
          </li>
          <li>
            <p>
              <img src={logoutIcon} alt="Log Out" /> Log Out{" "}
            </p>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Sidebar;
