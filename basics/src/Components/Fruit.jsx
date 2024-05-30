export default function Fruit({id, name, count})
{
    //<li key={f.id} id={f.id}>{f.name} {f.count}</li>
    return(
        <div>
            {(count > 10) ? <li key={id} id={id}>{name} {count}</li> : ""}            
        </div>
    );
}