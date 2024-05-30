import { useState } from "react";
import styles from '../../css/welcomeuserinput.module.css';

export default function MyUseState()
{
    const [name, setName] = useState("");
    return(
        <div>
            <div>Welcome to React, <span className={styles.name}>{name}</span>!</div>
            <input type="text" onChange={(e) => setName(e.target.value)}></input>
        </div>
    );
}