import React, { useEffect, useLayoutEffect} from "react";

export default function MyUseLayoutEffect()
{
    useEffect(() => console.log("using useEffect"));
    useLayoutEffect(() => console.log("using useLayoutEffect"));

    return(
        <div>
            My UseLayoutEffect
        </div>
    );
}