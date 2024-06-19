import React, { useEffect, useState } from "react";

function JokeCall()
{
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://icanhazdadjoke.com/`, {
            headers:{
            'Accept': 'application/json'
        }
    }).then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.error(error));
    },[]);//The [] ensures that the call is only made once

    if(data)
    {
        return data.joke;
    }
    else
    {
        return null;
    }
}

export default function GetJoke()
{
    return(<div>
        {JokeCall()}
    </div>);
}