import React, { useEffect, useState } from "react";

function JokeCall()
{
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://official-joke-api.appspot.com/random_joke/`)
        .then(response => response.json())
        .then(setData)
        .catch(console.error);
    },[]); //The [] ensures that the call is only made once

    if(data)
    {
        return <div>{data.setup} {data.punchline}</div>;
    }
    else
    {
        return null;
    }
}

export default function GetJoke()
{
    return(<JokeCall></JokeCall>);
}