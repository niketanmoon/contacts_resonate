import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#7f749b" }}>
        <Grid container spacing={2} sx={{ padding: "10px" }}>
          <Grid item xs={2}>
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                display: {
                  xs: "block",
                  textDecoration: "none",
                  color: "white",
                },
              }}
            >
              Resonate
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Header;
