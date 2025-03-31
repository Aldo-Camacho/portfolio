import React from "react";
import { Box } from "@mui/material";

function PageBox({children}) {
    return (
       <Box height={"75vh"} display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"}>
            {children}
       </Box>
    )
}

export default PageBox;