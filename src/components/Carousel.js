import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect, Children } from "react";

const useStyles = makeStyles({
    main: {
        position: "relative !important",
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent:"space-between",
        borderRadius: 26,
        opacity: 0,
        transition: "opacity 0.1s !important",
    },
    loaded: {
        opacity: 1,
    }
})
function Carousel({ children, showMultiple, interval, height, width, sx }) {
    const classes = useStyles();
    const count = Children.count(children);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const sizeMatch = useMediaQuery(useTheme().breakpoints.up("md"));

    useEffect(() => {
        setLoaded(true);    
        
        if (interval) {
            setTimeout(() => {
                next();
            }, interval);
        }
    }, [currentIndex]);

    const getPreviousIndex = (index) => index === 0 ? count - 1 : index - 1;
    const getNextIndex = (index) => (index + 1) % count;

    const toShow = showMultiple && count > 1 && sizeMatch ? [getPreviousIndex(currentIndex), currentIndex, getNextIndex (currentIndex)] : [currentIndex];
    const mainWidth = width ? width : (sizeMatch ? 30 : 80);
    const mainHeight = height ? height : 40;

    const moveSelected = (index) => {
        setLoaded(false);
        setTimeout(() => {
            setCurrentIndex(index);
        }, 100);
    }

    const next = () => {
        moveSelected(getNextIndex(currentIndex));
    };

    const previous = () => {
        moveSelected(getPreviousIndex(currentIndex));
    };

    const childrenComponents = Children.toArray(children);
    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", ...sx }}>
            { count > 1 && <IconButton onClick={previous}><ArrowCircleLeft/></IconButton>}
            <Box sx={{ display: "flex", flexDirection: "row", gap: "8px", paddingY: "8px" }}>
            { toShow.map( index => (
                React.cloneElement(childrenComponents[index], {
                    className: `${classes.main} ${loaded ? classes.loaded : ""}`,
                    key: index,
                    raised: true,
                    sx: {
                        height: `${mainHeight}vh`,
                        width: index === currentIndex ? `${mainWidth}vw` : "20vw"
                    }
                })
            ))}
            </Box>
            { count > 1 && <IconButton onClick={next}><ArrowCircleRight/></IconButton> }
        </Box>
    );
}

export default Carousel;