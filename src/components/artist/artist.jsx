import "./style.css";
import {
  Grid,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Artist() {
  const navList = ["Music", "Podcast", "Live", "Radio"];

  return (
    <div className="containerArtist">
      <div className="artist">
        <div className="verified-2">
          <img
            src="/images/varified.svg"
            alt="Not Found"
            className="verified"
          />
          <p className="verified-artist">Verified Artist</p>
        </div>
        <p className="michael-jackson">Michael Jackson</p>
        <div className="group-184">
          <p className="_-27852501-monthly-list">
            27.852.501 monthly listeners
          </p>
        </div>
      </div>
      <Grid position="static" style={{ padding: "5px", marginTop: "-60vh", marginLeft: "22vw" }}>
        <Toolbar>
          <Box style={{ flexGrow: 1, display: "flex", gap: "10px" }}>
            {navList.map((nav) => (
              <Typography
                key={nav}
                variant="subtitle2"
                component="div"
                style={{ flexGrow: 1, color: "#fff" }}
              >
                {nav}
              </Typography>
            ))}
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#2e0000",
              borderRadius: "12px",
              padding: "0 10px",
              width: "300px",
            }}
          >
            <InputBase
              placeholder="Michael Jackson"
              style={{ color: "white", flex: 1 }}
            />
            <IconButton
              type="submit"
              style={{ padding: "10px", color: "white" }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Grid>
    </div>
  );
}

export default Artist;
