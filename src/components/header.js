import React, { useState } from "react";

import { Typography } from "@mui/material";
export default function header(props) {
  return (
    <header>
      <Typography variant="h3" gutterBottom component="div">
        To Do List: {props.incomplete} items pending{" "}
      </Typography>
    </header>
  );
}
