import React, { useEffect, useState } from "react";

function GetUser({login})
{
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then(response => response.json())
        .then(setData)
        .catch(console.error);
    }, [login]);

    if(data)
    {
        return <div><div>{JSON.stringify(data, null, 2)}</div><img src={data.avatar_url} alt={data.login}></img></div>;
        //return <pre>{JSON.stringify(data, null, 2)}</pre>;
    }
    else
    {
        return null;
    }
}

export default function GetReq()
{
    return(<GetUser login="moonhighway"></GetUser>);
}