import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { useState, useEffect, Children } from "react";

function Carousel({ children, showMultiple, interval }) {
    const count = Children.count(children);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (interval) {
        const intervalId = setInterval(() => {
            next();
        }, interval);

        return () => clearInterval(intervalId);
        }
    }, [currentIndex]);

    const getPreviousIndex = (index) => index === 0 ? count - 1 : index - 1;
    const getNextIndex = (index) => (index + 1) % count;

    const toShow = showMultiple ? [getPreviousIndex(currentIndex), currentIndex, getNextIndex (currentIndex)] : [currentIndex];

    const next = () => {
        setCurrentIndex((prevIndex) => getNextIndex(prevIndex));
    };

    const previous = () => {
        setCurrentIndex((prevIndex) => getPreviousIndex(prevIndex));
    };

    const childrenComponents = Children.toArray(children);
    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
            { count > 1 && <IconButton onClick={previous}><ArrowCircleLeft/></IconButton>}
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            { toShow.map( index => (
                React.cloneElement(childrenComponents[index], { key: index, raised: true, sx: { position: "relative", height: index === currentIndex ? "25rem" : "20rem", width: index === currentIndex ? "40rem" : "25rem", alignSelf: "center", display: "flex", flexDirection: "column", justifyContent:"space-between" } })
            ))}
            </Box>
            { count > 1 && <IconButton onClick={next}><ArrowCircleRight/></IconButton> }
        </Box>
    );
}

export default Carousel;