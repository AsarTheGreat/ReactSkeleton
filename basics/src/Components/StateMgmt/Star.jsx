import { FaStar } from "react-icons/fa";
import { useState } from "react";

//const createArray = length => [...Array(length)];
function createArray(length)
{
    return [...Array(length)];
}

export default function Star({TotalStars})
{
    const [selectedStars, setSelectedStars] = useState(0);
    // const MyStar = ({selected = false}) => (
    //     <FaStar color={selected ? "red":"grey"}></FaStar>
    // );
    function MyStar({selected = false, onSelect = f => f})
    {
        return <FaStar color={selected ? "red":"gray"} onClick={onSelect}></FaStar>;
    }

    return(
        //i is the counter. selected is comparing selectedStars(which is 3 from useState) to i
        <div>
            {createArray(TotalStars).map((n,i) => <MyStar key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i+1)}></MyStar>)}
            <p>{selectedStars} of {TotalStars} stars</p>
        </div>
    );
}