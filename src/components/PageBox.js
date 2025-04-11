import React from "react";
import { Box } from "@mui/material";

function PageBox({children}) {
    return (
       <Box maxHeight={"78vh"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
            {children}
       </Box>
    )
}

export default PageBox;