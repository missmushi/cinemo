import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "./FavoriteButton";

const drawerWidth = 320;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);


  return (
    <Box sx={{ display: "flex" }} className="font-sans">
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <div className="relative h-64">
          <img
            src={props.movie.poster_url}
            alt="poster"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
            style={{ objectPosition: "top" }}
          />
          <div className="absolute inset-0 bg-black opacity-25 rounded-md"></div>
        </div>
        <div className="mt-4 rounded-md flex justify-between">
          <div className="flex items-center">
            <div className="font-bold text-2xl ml-5">
              {props.movie.title_en}
            </div>
          </div>
          <div className="flex items-end mr-5">
            <Button movie={props.movie} />
          </div>
        </div>
        <div className="font-bold text-base mx-5 mt-2 mb-2">
          {props.movie.genre}
        </div>
        <Divider />
        <div
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 6,
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "300px",
          }}
          className="ml-5 font-normal text-sm mb-1 mt-2 py-2"
        >
          {props.movie.synopsis_en}
        </div>
        <div className="font-bold text-base mx-5 mt-3">Director</div>
        <div className="font-normal text-lg mx-5 mb-5">{props.movie.director}</div>
        <div className="font-bold text-base mx-5 ">Release Date</div>
        <div className="font-normal text-lg mx-5 mb-5 ">{props.movie.release_date}</div>
      </Drawer>
    </Box>
  );
}
