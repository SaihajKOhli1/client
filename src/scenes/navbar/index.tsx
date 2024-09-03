import React, { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from '@mui/icons-material/Pix';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import Sidebar from "@/components/Sidebar";

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 2rem" }}>
      {/* Left side: Sidebar toggle button and logo with name */}
      <FlexBetween gap="0.75rem">
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon sx={{ color: 'white' }} />
        </IconButton>
        <PixIcon sx={{ fontSize: "28px", color: 'white' }} />
        <Typography variant="h4" fontSize="16px" sx={{ color: 'white' }}>
          Finanseer
        </Typography>
      </FlexBetween>

      <Sidebar isOpen={open} onClose={() => setOpen(false)} /> {/* Render the Sidebar component */}

      {/* Right side: Links */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to ="../"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? 'white' : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to ="./predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit"
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </Box>
  );
};

export default Navbar;
