import React, { useEffect, useLayoutEffect} from "react";

export default function MyUseLayoutEffect()
{
    /*
    useEffect is more for fetching data, runs AFTER browser renders screen
    useLayoutEffect is more for immediate screen changes, runs BEFORE render screen
     */
    useEffect(() => console.log("using useEffect"));
    useLayoutEffect(() => console.log("using useLayoutEffect"));

    return(
        <div>
            My UseLayoutEffect
        </div>
    );
}