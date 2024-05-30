import { useEffect, useState } from "react";

export default function MyUseEffect(){
    const [checked, setChecked] = useState(false);

    useEffect( () => {
        alert(`checked: ${checked.toString()}`);
    });

    return(
        <div>
            <input type="checkbox" value={checked} onChange={(e) => setChecked(checked => !checked)}></input>
            {checked ? "checked" : "not checked"}
        </div>
    );
}