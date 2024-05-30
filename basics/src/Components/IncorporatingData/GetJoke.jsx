import React, { useEffect, useState } from "react";

function JokeCall()
{
    const [data, setData] = useState();

    fetch(`https://official-joke-api.appspot.com/random_joke/`)
        .then(response => response.json())
        .then(setData)
        .catch(console.error);

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